import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DispatchType } from "../../redux/configStore";
import {
  getCommentByIdApi,
  getDetailByIdApi,
} from "../../redux/JobDetailReducer/JobDetailReducer";
import JobDetailLeft from "./JobDetailLeft";
import JobDetailRight from "./JobDetailRight";

type Props = {};

const JobDetail = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  const param = useParams();
  const id: string | undefined = param.id;

  const getDetailById = () => {
    const actionAsync = getDetailByIdApi(id);
    dispatch(actionAsync);
  };

  useEffect(() => {
    getDetailById();
    getCommentById();
  }, []);

  const getCommentById = () => {
    const actionAsync = getCommentByIdApi(id);
    dispatch(actionAsync);
  };

  return (
    <div className="jobdetail">
      <div className="left">
        <JobDetailLeft />
      </div>
      <div className="right">
        <JobDetailRight />
      </div>
    </div>
  );
};

export default JobDetail;
