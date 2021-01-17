import { Link } from "react-router-dom";
import "../../styles/components/MeasurementList.css";

export default function MeasurementList(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link
        to={{ pathname: "/job", query: { measurement: "ping" } }}
        className={`list-group-item list-group-item-action ${
          props.active === "ping" ? "enabled" : ""
        }`}
      >
        Ping
      </Link>
      <Link
        to={{ pathname: "/job", query: { measurement: "dns_lookup" } }}
        className={`list-group-item list-group-item-action ${
          props.active === "dns_lookup" ? "enabled" : ""
        }`}
      >
        DNS lookup
      </Link>
      <Link
        to={{ pathname: "/job", query: { measurement: "traceroute" } }}
        className={`list-group-item list-group-item-action ${
          props.active === "traceroute" ? "enabled" : ""
        }`}
      >
        Traceroute
      </Link>
      <Link
        to={{ pathname: "/job", query: { measurement: "http" } }}
        className={`list-group-item list-group-item-action ${
          props.active === "http" ? "enabled" : ""
        }`}
      >
        HTTP
      </Link>
      <Link
        to={{ pathname: "/job", query: { measurement: "tcp_speed_test" } }}
        className={`list-group-item list-group-item-action ${
          props.active === "tcp_speed_test" ? "enabled" : ""
        }`}
      >
        TCP Speed Test
      </Link>
    </div>
  );
}
