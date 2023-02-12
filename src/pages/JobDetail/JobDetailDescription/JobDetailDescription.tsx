import React from "react";
import { useSelector } from "react-redux";
import { JobDetailModel } from "../../../Models/jobDetail/jobDetailModel";
import { StateType } from "../../../redux/configStore";

type Props = {};

const JobDetailDescription = (props: Props) => {
  const { arrJobDetail } = useSelector(
    (state: StateType) => state.JobDetailReducer
  );

  return (
    <>
      {arrJobDetail.map((detail: JobDetailModel, index: number) => {
        return (
          <div className="aboutgig">
            <h2>About This Gig</h2>
            <b>
              <u>***ALWAYS DISCUSS FIRST BEFORE MAKING ORDER***</u>
            </b>
            <br />
            <b>
              <u>***ALWAYS DISCUSS FIRST BEFORE MAKING ORDER***</u>
            </b>
            <br />
            <b>
              <u>***ALWAYS DISCUSS FIRST BEFORE MAKING ORDER***</u>
            </b>
            <br />
            <br />
            <div className="intro">{detail.congViec.moTa}</div>
            <br />
            <br />
            <div className="icando">
              <b>
                <u>I CAN DO :</u>
              </b>
              <br />
              <br />

              {detail.congViec.moTaNgan}
              <br />
            </div>
            <div className="data">
              <ul>
                <li className="data-item">
                  <p>Progamming language</p>
                  <ul>
                    <li>PHP</li>
                  </ul>
                </li>
                <li className="data-item">
                  <p>Expertise</p>
                  <ul>
                    <li>Performance</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default JobDetailDescription;
