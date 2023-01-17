import React from 'react'
import JobDetailAboutSeller from './JobDetailAboutSeller/JobDetailAboutSeller'
import JobDetailAddCommend from './JobDetailAddCommend/JobDetailAddCommend'
import JobDetailDescription from './JobDetailDescription/JobDetailDescription'
import JobDetailGallery from './JobDetailGallery/JobDetailGallery'
import JobDetailOverview from './JobDetailOverview/JobDetailOverview'
import JobDetailPayment from './JobDetailPayment/JobDetailPayment'
import JobDetailRecommend from './JobDetailRecommend/JobDetailRecommend'
import JobDetailReview from './JobDetailReview/JobDetailReview'

type Props = {}

const JobDetailLeft = (props: Props) => {
  return (
    <div>
        <JobDetailOverview/>
        <JobDetailGallery/>
        <JobDetailDescription/>
        <JobDetailAboutSeller/>
        <JobDetailPayment/>
        <JobDetailRecommend/>
        <JobDetailReview/>
        <JobDetailAddCommend/>
    </div>
  )
}

export default JobDetailLeft