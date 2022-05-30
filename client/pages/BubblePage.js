import React from "react";
import { BubbleChart } from "../components/BubbleChart";
import { useLoading } from "../library/useloading";
import { fetchJSON } from "../library/http";
import { ErrorComponent } from "../components/errorComponent";
import { LoadingComponent } from "../components/loadingComponent";
import { ArrowButton } from "../components/ArrowButtonComponent";

const toggleSelected = (data) => {
  console.log("This should alter the array of selected categories");
  console.log(`data: ${JSON.stringify(data)}`);
  data.weight === 2 ? (data.weight = 0) : data.weight++;
};

export function BubblePage() {
  const { loading, error, data } = useLoading(async () => {
    return (await fetchJSON("/api/category/all")).map(({ name, _id }) => ({
      name,
      _id,
      weight: 0,
    }));
  }, []);
  if (loading) {
    return <LoadingComponent message={"Loading categories, please wait..."} />;
  }
  if (error) {
    return <ErrorComponent error={error} />;
  }

  if (data.length === 0) {
    return <div>No categories to show!</div>;
  }

  const mapDataAndSubmit = () => {
    const categories = data
      .map((entry) => ({
        category: entry.name,
        weight: entry.weight,
      }))
      .filter((e) => e.weight !== 0);
  };

  return (
    <section className="section">
      <div className={"block is-flex is-justify-content-center pt-6"}>
        <p className={"has-text-white"}>
          Click once on the causes you are interested in, twice on what you
          consider core values for your company
        </p>
      </div>
      <BubbleChart data={data} onClick={toggleSelected} />
      <div className={"is-flex is-justify-content-center"}>
        <ArrowButton value={"Find match"} onClick={mapDataAndSubmit} />
      </div>
    </section>
  );
}
