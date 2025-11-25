"use client";
import React from "react";
import { motion } from "framer-motion";
import Carousel from "@/app/components/carousel";
import News_ticker from "@/app/components/News_ticker";
import About_School from "@/app/components/About_School";
import HeadMasterQuota from "@/app/components/HeadMasterQuota";
import SidebarSections from "@/app/globalComponents/SidebarSections";

const fadeFrom = {
  right: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  left: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  up: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  },
  down: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
};

// Smooth ease transition
const transition = { duration: 0.6, ease: "easeOut" };

// Animation trigger on scroll into view
const scrollProps = {
  initial: "initial",
  whileInView: "animate",
  viewport: { once: true, amount: 0.2 },
  transition,
};
const page = () => {


  return (
    <div className="bg-gray-100 ">
      <motion.div variants={fadeFrom.up} {...scrollProps}>
        <Carousel />
      </motion.div>

      <div className=" md:flex justify-between gap-x-[20px] mt-4">
        <div className="space-y-4 mb-2 md:w-[70%]">
          <motion.div variants={fadeFrom.left} {...scrollProps}>
            <News_ticker />
          </motion.div>
          <motion.div variants={fadeFrom.right} {...scrollProps}>
            <About_School />
          </motion.div>
          <motion.div variants={fadeFrom.left} {...scrollProps}>
            <HeadMasterQuota />
          </motion.div>         
        </div>

        <div className="space-y-4 md:w-[30%] md:pr-2">          
          <motion.div variants={fadeFrom.up} {...scrollProps}>
            <SidebarSections />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;
