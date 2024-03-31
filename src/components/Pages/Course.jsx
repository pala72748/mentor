import React, { useState } from 'react';
import Header from '../Header/Header';
import Coursetab from '../tab/Coursetab';
import CourseCard from '../Cards/Course'; 
import bg from "../../assets/bg.png";

const Course = () => {
    const [activeTab, setActiveTab] = useState(1);

    const changeTab = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (
        <>
            <Header />
            <div className='mx-auto w-full bg-[#F8F8F8] font-poppins bg-center bg-cover' style={{backgroundImage:`url(${bg})`}}>
                <div className='flex flex-col justify-center items-center h-72 border-2'>
                    <div className=''>
                        
                        <h2 className='text-3xl font-bold sm:text-2xl'>Hi Ope, Let’s start Your Learning</h2>
                    </div>
                    <div className='w-[450px] items-start mt-3 sm:max-w-sm'>
                        <form action="" className='flex flex-row justify-between'>
                            <input type="text" className='py-2 pl-2 w-full' placeholder='What do you want to learn?' />
                            <button className='py-3 px-6 bg-[#2904f5] text-white mx-2 rounded-lg'>Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container w-full xl:mx-auto mt-8 sm:mx-6 font-poppins" >
                <div className="flex sm:flex-row sm:w-[90vw]  border-b-4">
                    <button
                        className={`px-4 py-2 ${activeTab === 1 ? ' text-[#2904f5] border-b-4 border-[#2904f5] text-2xl' : 'bg-white text-2xl'
                            }`}
                        onClick={() => changeTab(1)}
                    >
                        Your Learning
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === 2 ? 'text-[#2904f5] border-b-4 border-[#2904f5] text-2xl' : 'bg-white text-2xl'
                            }`}
                        onClick={() => changeTab(2)}
                    >
                        Course
                    </button>
                </div>
                <div className="mt-4">
                    {activeTab === 1 && <div className="p-4 bg-white shadow-lg sm:w-[90vw]"><Coursetab/></div>}
                    {activeTab === 2 && <div className="p-4 bg-gray-100">Content of Tab 2</div>}
                    {activeTab === 3 && <div className="p-4 bg-gray-100">Content of Tab 3</div>}
                </div>
            </div>
            <div className='container xl:mx-auto lg:p-6 font-poppins'>
                <div className='flex justify-center sm:w-[100vw] sm:py-6'>
                    <h2 className='text-2xl py-5 font-bold sm:text-xl sm:text-center'>Top courses in Product Design</h2>
                </div>
            </div>
            <div className='container xl:mx-auto items-center font-poppins '>
                <div className='flex flex-row sm:flex-col sm:flex sm:w-[100vw]  grid gap-8 grid-cols-3 lg:flex-row items-center justify-between p-6 lg:px-8'>
                    <CourseCard/> {/* Changed Course to CourseCard */}
                </div>
            </div>
        </>
    )
}

export default Course;
