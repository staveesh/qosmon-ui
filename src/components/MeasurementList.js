import { NavLink } from "react-router-dom";
import "../styles/components/MeasurementList.css";

export default function MeasurementList(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {props.params.map((param) => {
        const path = param.path.pathname;
        const type = path.substring(path.indexOf('/',2)+1);
        return (
          <NavLink
            key={type}
            to={param.path}
            className="list-group-item list-group-item-action"
          >
            {param.name}
          </NavLink>
        );
      })}
    </div>
  );
}
