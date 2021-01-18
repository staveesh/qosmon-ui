import { NavLink } from "react-router-dom";
import "../styles/components/MeasurementList.css";

export default function MeasurementList(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {props.params.map((param, index) => {
        const path1 = param.path.pathname;
        const type1 = path1.substring(path1.indexOf("/", 2) + 1);
        const path2 = props.loc.pathname;
        const type2 = path2.substring(path2.indexOf("/", 2) + 1);

        return (
          <NavLink
            key={type1}
            to={param.path}
            isActive={() =>
              (index === 0 && type2.startsWith("/")) || type1 === type2
            }
            className="list-group-item list-group-item-action"
          >
            {param.name}
          </NavLink>
        );
      })}
    </div>
  );
}
