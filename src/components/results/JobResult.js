import { React } from "react";
import JobCard from "./JobCard";

const JobResult = (props) => {
  let main = null;
  if (props.jobs === null || props.jobs === undefined) {
    main = "Loading...";
  } else if (props.jobs.length === 0) {
    main = "This job type has no scheduled jobs.";
  } else {
    main = props.jobs.map((job, index) => (
      <JobCard key={index} index={index} data={job} type={props.type} />
    ));
  }

  return (
    <div>
      <h2>View Results : {props.type}</h2>
      {main}
    </div>
  );
};

export default JobResult;
