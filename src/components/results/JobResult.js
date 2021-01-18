import { React, useState, useEffect } from "react";
import JobCard from "./JobCard";
import axios from "axios";

export default function JobResult(props) {
  const [state, setState] = useState({
    data: null,
    type: "",
  });
  const path = props.location.pathname;
  let type = path.substring(path.indexOf("/", 2) + 1);
  if (type.startsWith("/")) type = "ping";
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/results/jobs?type=${type}`, {
        headers: {
          Authorization: "Bearer " + props.jwt,
        },
      })
      .then((res) => {
        setState({
          data: res.data,
          type: type,
        });
      })
      .catch((e) => console.log(e));
  }, [type, props.jwt]);

  let main = null;
  if (state.data === null) {
    main = "Loading...";
  } else if (state.data.length === 0) {
    main = "This job type has no scheduled jobs.";
  } else {
    main = state.data.map((job, index) => (
      <JobCard key={index} index={index} data={job} type={type} />
    ));
  }

  return (
    <div>
      <h2>View Results : {type}</h2>
      {main}
    </div>
  );
}
