import { ArrowButton } from "./ArrowButtonComponent";
import { useState } from "react";

export function GalleryCard({
  percentage,
  selectedCategories,
  company,
  onClick,
  singleCol,
}) {
  const [isExpanded, setExpanded] = useState(false);
  console.log(`selectedCategories: ${JSON.stringify(selectedCategories)}`);

  const matchingList = () => {
    return (
      <>
        <div className={"column is-narrow"}>
          <ul className={"has-text-left"}>
            {selectedCategories.map((selCat) => {
              return (
                company.categories.findIndex(
                  (np) => np.category.name === selCat.name
                ) !== -1 && (
                  <li>
                    <i
                      className={"fa-solid fa-circle-check has-text-success"}
                    />
                    {selCat.name}
                  </li>
                )
              );
            })}
          </ul>
        </div>
        <div className={"column is-narrow"}>
          <ul className={"has-text-left"}>
            {selectedCategories.map((selCat) => {
              return (
                company.categories.findIndex(
                  (np) => np.category.name === selCat.name
                ) === -1 && (
                  <li>
                    <i className={"fa-solid fa-circle-xmark has-text-danger"} />
                    {selCat.name}
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </>
    );
  };
  const toggleExpanded = () => {
    onClick();
    isExpanded ? setExpanded(false) : setExpanded(true);
  };

  if (singleCol && !isExpanded)
    return (
      <div className={"card is-flex is-flex-direction-column p-5 is-hidden"} />
    );
  return (
    <div className={"card is-flex is-flex-direction-column p-5"}>
      {isExpanded && (
        <a
          className={"fa-solid fa-arrow-left is-size-6 has-text-black"}
          onClick={() => toggleExpanded()}
        > Back
        </a>
      )}
      <div className="card-image has-text-centered">
        <figure className={"image m-4 is-inline-block "}>
          <img src={company.logo} alt={"Company logo"} />
        </figure>
      </div>
      <div className={"is-size-6 has-text-centered pt-4"}>
        {isExpanded ? (
          <>
            <h3 className={"has-text-danger"}>MATCHES</h3>
            <div className={"columns is-centered"}>{matchingList()}</div>
            <div className={"divider columns is-centered m-5 "} />
          </>
        ) : (
          <div className={"has-text-danger"}>{percentage}% MATCH</div>
        )}
      </div>
      <div className={"content has-text-centered is-flex-grow-1 p-4"}>
        {isExpanded ? company.viewMoreInfo.extendedInfo : company.description}
      </div>
      <div className={"is-flex is-justify-content-center p-4"}>
        <ArrowButton
          value={isExpanded ? "Start registration" : "View more"}
          onClick={() => toggleExpanded()}
        />
      </div>
    </div>
  );
}
