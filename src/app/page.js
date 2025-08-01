import React from 'react'
import Carousel from '@/app/components/carousel'
import News_ticker from './components/News_ticker'
 
const page = () => {
  return (
    <div className='bg-white'>
      <Carousel/>
      <News_ticker/>
    </div>
  )
}

export default page