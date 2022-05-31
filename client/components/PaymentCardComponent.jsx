import { ArrowButton } from "./ArrowButtonComponent";
import { useNavigate } from "react-router-dom";

export function PaymentCard({ title, revenue, perks }) {
  const navigate = useNavigate();
  return (
    <div
      className={"card-content card payments is-flex is-flex-direction-column"}
    >
      <div className="media-content">
        <p className="title is-4">{title}</p>
        <p className="subtitle is-6 mb-0 pb-2">{revenue}</p>
        <ul>
          {perks &&
            perks.map((p) => (
              <li className={"pb-1"}>
                <span className="icon is-small">
                  <i className="fas fa-check" />
                </span>
                <span>{p}</span>
              </li>
            ))}
        </ul>
      </div>
      <div className={"is-flex is-justify-content-center is-narrow"}>
        <ArrowButton
          value={"Choose plan"}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </div>
  );
}
