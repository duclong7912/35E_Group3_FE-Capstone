import React from "react";
import JobDetailLeft from "./JobDetailLeft";
import JobDetailRight from "./JobDetailRight";

type Props = {};

const JobDetail = (props: Props) => {
  return (
    <div className="jobdetail">
      <div className="left">
        <JobDetailLeft/>
      </div>
      <div className="right">
        <JobDetailRight />
      </div>
    </div>
  );
};

export default JobDetail;
