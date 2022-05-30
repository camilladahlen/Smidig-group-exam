import { GalleryCard } from "../components/GalleryCardComponent";
import { useLoading } from "../library/useloading";
import { Header } from "../components/Header";
import { useState } from "react";

export function GalleryPage({ selectedCategories }) {
  selectedCategories = [
    { name: "Water", weight: 1 },
    { name: "Education", weight: 1 },
    { name: "Female rights", weight: 1 },
    { name: "Refugees", weight: 1 },
  ];

  const [singleCol, setSingleCol] = useState(false);
  const { error, loading, data } = useLoading(
    async () =>
      (
        await fetch("/api/company/match", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ a: 1, b: "Textual content" }),
        })
      ).json(),
    []
  );
  if (loading) return <div>Loading...</div>;
  if (error) {
    return <div>Error! {`${error}`}</div>;
  }

  const toggleColumns = () => {
    singleCol ? setSingleCol(false) : setSingleCol(true);
  };
  return (
    <section className={"section"}>
      <h1
        className={
          "title is-family-secondary is-size-1 has-text-white has-text-centered pb-6"
        }
      >
        Non-profits that match your profile
      </h1>
      <div className={"container"}>
        <div className={"columns is-centered"}>
          <div
            className={`column ${
              singleCol ? "grid-container single-col" : "grid-container"
            }`}
          >
            {data.map((entry) => (
              <GalleryCard
                logo={entry.nonProfit.logo}
                description={entry.nonProfit.description}
                percentage={entry.percentage}
                company={entry.nonProfit}
                extendedInfo={entry.nonProfit.viewMoreInfo.extendedInfo}
                selectedCategories={selectedCategories}
                companyCategories={entry.nonProfit.categories}
                onClick={toggleColumns}
                singleCol={singleCol}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
