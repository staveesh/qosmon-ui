import { NavLink } from "react-router-dom";
import "../styles/components/MeasurementList.css";

export default function MeasurementList(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavLink
        to={props.schedule ? "/job/ping" : "/results/ping"}
        isActive={() => props.type === "ping"}
        className="list-group-item list-group-item-action"
      >
        Ping
      </NavLink>
      <NavLink
        to={props.schedule ? "/job/dns_lookup" : "/results/dns_lookup"}
        isActive={() => props.type === "dns_lookup"}
        className="list-group-item list-group-item-action"
      >
        DNS Lookup
      </NavLink>
      <NavLink
        to={props.schedule ? "/job/traceroute" : "/results/traceroute"}
        isActive={() => props.type === "traceroute"}
        className="list-group-item list-group-item-action"
      >
        Traceroute
      </NavLink>
      <NavLink
        to={props.schedule ? "/job/http" : "/results/http"}
        isActive={() => props.type === "http"}
        className="list-group-item list-group-item-action"
      >
        HTTP Download
      </NavLink>
      <NavLink
        to={props.schedule ? "/job/tcp_speed_test" : "/results/tcp_speed_test"}
        isActive={() => props.type === "tcp_speed_test"}
        className="list-group-item list-group-item-action"
      >
        TCP Throughput
      </NavLink>
    </div>
  );
}
