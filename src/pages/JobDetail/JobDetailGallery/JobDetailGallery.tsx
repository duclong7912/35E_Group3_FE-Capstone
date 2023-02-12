import React from "react";
import Slick, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { StateType } from "../../../redux/configStore";
import { JobDetailModel } from "../../../Models/jobDetail/jobDetailModel";
type Props = {};

const JobDetailGallery = (props: Props) => {
  const setting = {};

  const { arrJobDetail } = useSelector(
    (state: StateType) => state.JobDetailReducer
  );

  return (
    <div className="jobdetail--gallery">
      <Slick {...setting}>
        {arrJobDetail.map((detail:JobDetailModel, index:number)=>{
          return (
          <div className="gallery--item" key={index}>
            <img src={detail.congViec.hinhAnh} alt="..." />
          </div>

          )
        })}
          
      </Slick>
    </div>
  );
};

export default JobDetailGallery;
