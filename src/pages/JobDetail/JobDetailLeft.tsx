import React from 'react'
import JobDetailAboutSeller from './JobDetailAboutSeller/JobDetailAboutSeller'
import JobDetailComment from './JobDetailComment/JobDetailComment'
import JobDetailDescription from './JobDetailDescription/JobDetailDescription'
import JobDetailGallery from './JobDetailGallery/JobDetailGallery'
import JobDetailOverview from './JobDetailOverview/JobDetailOverview'
import JobDetailPayment from './JobDetailPayment/JobDetailPayment'
import JobDetailReview from './JobDetailReview/JobDetailReview'

type Props = {}

const JobDetailLeft = (props: Props) => {
  return (
    <>
        <JobDetailOverview/>
        <JobDetailGallery/>
        <JobDetailDescription/>
        <JobDetailAboutSeller/>
        <JobDetailPayment/>
        <JobDetailReview/>
        <JobDetailComment/>
    </>
  )
}

export default JobDetailLeft