import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='w-100 mb-5' style={{height: '100vh'}}>
      <img className='w-100 h-100' style={{objectFit: 'cover'}} src="./img/carousel-1.png" alt="..." />
    </div>
  )
}

export default Home