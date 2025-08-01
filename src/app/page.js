import React from 'react'
import Carousel from '@/app/components/carousel'
import News_ticker from './components/News_ticker'
import About_School from './components/About_School'
import NotishBorad from '../globalComponents/NotishBorad'
import HeadMasterQuota from './components/HeadMasterQuota'
import Card_Data from './components/Card_Data'
import Side_Card_Data from '@/globalComponents/Side_Card_Data'
 
const page = () => {
  return (
    <div className='bg-white'>
      <Carousel/>

      <div className='flex justify-between gap-x-[20px]'>
        <div>
          <News_ticker/>
          <About_School/>
          <HeadMasterQuota/>
          <Card_Data/>
        </div>
        <div>
          <NotishBorad/>
          <Side_Card_Data/>
          
        </div>
      </div>
      
    </div>
  )
}

export default page