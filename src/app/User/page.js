'use client'

import React from 'react'
import { motion } from 'framer-motion'

import Carousel from '@/app/User/components/carousel'
import News_ticker from '@/app/User/components/News_ticker'
import About_School from '@/app/User/components/About_School'
import NotishBorad from '@/app/User/globalComponents/NotishBorad'
import HeadMasterQuota from '@/app/User/components/HeadMasterQuota'
import Card_Data from '@/app/User/components/Card_Data'
import Side_Card_Data from '@/app/User/globalComponents/Side_Card_Data'

// Variants for directional entry
const fadeFrom = {
  right: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 }
  },
  left: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  },
  up: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 }
  },
  down: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }
  }
}

// Smooth ease transition
const transition = { duration: 0.6, ease: 'easeOut' }

// Animation trigger on scroll into view
const scrollProps = {
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true, amount: 0.2 },
  transition
}

const page = () => {
  return (
    <div className='bg-white'>
      <motion.div variants={fadeFrom.up} {...scrollProps}>
        <Carousel />
      </motion.div>

      <div className=' flex justify-between gap-x-[20px] mt-4'>
        <div className='space-y-4'>
          <motion.div variants={fadeFrom.left} {...scrollProps}>
            <News_ticker/>
          </motion.div>
          <motion.div variants={fadeFrom.right} {...scrollProps}>
            <About_School />
          </motion.div>
          <motion.div variants={fadeFrom.left} {...scrollProps}>
            <HeadMasterQuota />
          </motion.div>
          <motion.div variants={fadeFrom.right} {...scrollProps}>
            <Card_Data />
          </motion.div>
        </div>

        <div className='space-y-4'>
          <motion.div variants={fadeFrom.down} {...scrollProps}>
            <NotishBorad />
          </motion.div>
          <motion.div variants={fadeFrom.up} {...scrollProps}>
            <Side_Card_Data />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default page
