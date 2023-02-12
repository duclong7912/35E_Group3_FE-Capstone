import React from 'react'
import { useSelector } from 'react-redux'
import { JobDetailModel } from '../../../Models/jobDetail/jobDetailModel'
import { StateType } from '../../../redux/configStore'

type Props = {}

const JobDetailAboutSeller = (props: Props) => {
  
  const {arrJobDetail} = useSelector((state:StateType) =>state.JobDetailReducer)




  return (
   <>
    {arrJobDetail.map((detail:JobDetailModel, index: number) =>{
      return ( <div className="aboutseller" key={index}>
      <h2>About The Seller</h2>
      <div className="top">
        <div className="img">
          <img src={detail.avatar} />
        </div>
        <div className="info">
          <h6>{detail.tenNguoiTao}</h6>
          <p>
            I am a Software Engineer and a BEST WEB DESIGNER and DEVELOPER
          </p>
          <div className="star">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>5<span>({detail.congViec.danhGia})</span>
          </div>
          <button className="btn">Contact me</button>
        </div>
      </div>
      <div className="bot">
        <ul>
          <li>From<strong>Paskistan</strong></li>
          <li>Member since<strong>Feb 2017</strong></li>
          <li>Avg. response time<strong>1 hour</strong></li>
          <li>Last delivery<strong>about 10 hours</strong></li>
          
        </ul>
        <div className="article">
          {detail.congViec.moTaNgan}
        </div>
      </div>
    </div>)
    })}
   </>
  )
}

export default JobDetailAboutSeller