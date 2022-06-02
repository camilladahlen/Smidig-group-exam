import { GalleryCard } from "../components/GalleryCardComponent";
import { useLoading } from "../library/useloading";
import { useState } from "react";
import { postJSON } from "../library/http";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/GalleryPage.css";
import { LoadingComponent } from "../components/loadingComponent";
import { ErrorComponent } from "../components/errorComponent";

export function GalleryPage() {
  const location = useLocation();
  const selectedCategories = location.state.categories;
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
          body: JSON.stringify({ categories: selectedCategories }),
        })
      ).json(),
    []
  );
  if (loading)
    return <LoadingComponent message={"Finding matches, please wait..."} />;
  if (error) {
    return <ErrorComponent error={`Error! ${error}`} />;
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
                photos={entry.nonProfit.viewMoreInfo.photos}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
