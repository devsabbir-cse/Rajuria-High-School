"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getNoticeData } from "@/app/Get-Data/notice";
import { getClassRoutinesData } from "@/app/Get-Data/Class_Routines";
import { getStudentData } from "@/app/Get-Data/student";
import { getGalleryData } from '@/app/Get-Data/gallery';
import { getTeachersData } from "@/app//Get-Data/teachers";
import { getCommitteeData } from '@/app/Get-Data/committee';
import { getStuffData } from '@/app/Get-Data/stuff';
import { getHeadTeacherData } from "@/app/Get-Data/headTeacher";
import { getNewsTickerData } from "@/app/Get-Data/NewsTicker";

const GlobalDataContext = createContext();

export const GlobalDataProvider = ({ children }) => {
  const [notices, setNotices] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [classWise, setClassWise] = useState([]);
  const [galleryData, setGalleryData] = useState([]);
  const [teachers, setTeachersData] = useState([]);
  const [committee, setCommitteeData] = useState([]);
  const [stuff, setStuffData] = useState([]);
  const [headTeacher, setHeadTeacherData] = useState([]);
  const [newsTicker, setNewsTickerData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(getHeadTeacherData,"getHeadTeacherData");
    
    
    const loadAllData = async () => {
      try {
        const noticeRes = await getNoticeData();
        const routineRes = await getClassRoutinesData();
        const classWiseRes = await getStudentData();
        const galleryDataRes = await getGalleryData();
        const teachersDataRes = await getTeachersData();
        const committeeDataRes = await getCommitteeData();
        const stuffDataRes = await getStuffData();
        const headTeacherRes = await getHeadTeacherData();
        const newsTickerRes = await getNewsTickerData();
        
        setClassWise(classWiseRes);
        setNotices([...noticeRes].reverse());
        setGalleryData([...galleryDataRes].reverse());
        setRoutines(routineRes);
        setTeachersData(teachersDataRes);
        setCommitteeData(committeeDataRes);
        setStuffData(stuffDataRes);
        setHeadTeacherData(headTeacherRes);
        setNewsTickerData(newsTickerRes);
      } catch (error) {
        console.error("Global Data Load Error:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadAllData();
  }, []);

  const refreshHeadTeacher = async () => {
  const headTeacherRes = await getHeadTeacherData();
  setHeadTeacherData(headTeacherRes);
  }



  return (
    <GlobalDataContext.Provider value={{ notices, routines, classWise, galleryData, teachers, committee, stuff, headTeacher, newsTicker,  loading,refreshHeadTeacher }}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export const useGlobalData = () => useContext(GlobalDataContext);
