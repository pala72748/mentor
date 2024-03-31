import React from 'react'
import agent from '../../assets/agent.png';
import { LiaUserSolid } from "react-icons/lia";
import { FaVideo } from "react-icons/fa";

const Courseagent = () => {
    return (
        <>
            <div className='xl:w-7/12'>
                <div className='flex flex-row justify-between items-center sm:mx-3'>
                    <h2 className='text-3xl font-semibold'>Meet your Instructor</h2>
                </div>
            </div>
            <div className='xl:w-7/12 border my-3 sm:mx-2 '>
                <div className='my-6 flex xl:flex-row sm:flex-col justify-space items-center pb-6 xl:mx-12 sm:mx-4'>
                    <div className='xl:w-4/12 flex flex-col sm:w-full grid sm:justify-items-center '>
                        <img src={agent} width={150} alt="" />
                    </div>
                    <div className='xl:w-8/12 sm:w-full grid sm:justify-items-center '>
                        <h2 className='text-2xl font-semibold text-[#1700ff]'>Ahmed Raheed</h2>
                        <div className='flex flex-row justify-space items-center gap-6 my-4' >
                            <button className='py-1 px-2 bg-[#fab437] text-black '>Top Instructor</button>
                            <p>4.6</p>
                        </div>
                        <div className='flex gap-8'>
                            <ul className='flex items-center gap-2'>
                                <li><LiaUserSolid size={20} /></li>
                                <li>725,085 Students</li>
                            </ul>
                            <ul className='flex items-center gap-2'>
                                <li><FaVideo size={20} /></li>
                                <li>35 Courses</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='xl:m-8 sm:m-4'>
                    <p>I've spent a long time watching others learn, and teach, to refine how I work with you to be efficient, useful and, most importantly, memorable. I want you to carry what I've shown you into a bright future. <span>READ MORE</span></p>
                </div>
            </div>
        </>
    )
}

export default Courseagent;