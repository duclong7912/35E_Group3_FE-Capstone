import React from "react";
import JobDetailLeft from "./JobDetailLeft";
import JobDetailRight from "./JobDetailRight";

type Props = {};

const JobDetail = (props: Props) => {
  return (
    <div className="d-flex" style={{ height: "800px" }}>
      <JobDetailLeft />
      <JobDetailRight />
    </div>
  );
};

export default JobDetail;
