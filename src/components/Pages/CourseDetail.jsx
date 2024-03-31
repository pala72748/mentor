import React from 'react'
import Header from '../Header/Header';
import Coursebanner from '../CourseDetail/Coursebanner';
import Courselearn from '../CourseDetail/Courselearn';
import CoursePrice from '../CourseDetail/CoursePrice';
import Coursetag from '../CourseDetail/Coursetag';
import Coursetab from '../CourseDetail/Coursetab';
import Courseagent from '../CourseDetail/Courseagent';
import Coursereview from '../CourseDetail/Coursereview';
import Coursesimilar from '../CourseDetail/Coursesimilar';
const CourseDetail = () => {
  return (
    <>
      <Header />
      <Coursebanner />
      <div className='xl:container mx-auto xl:py-[100px] flex flex-row sm:flex-col'>
        <Courselearn />
        <CoursePrice />
      </div>
      <div className='xl:container mx-auto xl:py-[40px] flex flex-row sm:flex-col'>
        <Coursetag />
      </div>
      <div className='xl:container mx-auto xl:py-[40px] flex flex-col sm:flex-col'>
        <Coursetab />
      </div>
      <div className='xl:container mx-auto xl:py-[40px] flex flex-col sm:flex-col'>
        <div className='xl:w-7/12 '>
          <div className='sm:m-4'>
            <h2 className='text-3xl font-semibold my-2'>Course Details</h2>
            <p className='text-sm  text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quam placeat natus ratione corporis ex delectus nesciunt est exercitationem, voluptatem sed accusamus ea, cum aspernatur id nobis odit neque tempora!</p>
          </div>
        </div>
      </div>
      <div className='xl:container mx-auto xl:py-[40px] flex flex-col sm:flex-col'>
        <Courseagent />
      </div>
      <div className='xl:container mx-auto xl:py-[40px] flex flex-col sm:flex-col'>
        <Coursereview />
      </div>
      <div className='xl:container mx-auto xl:py-[40px] flex flex-col sm:flex-col'>
        <Coursesimilar />
      </div>
    </>
  )
}

export default CourseDetail;