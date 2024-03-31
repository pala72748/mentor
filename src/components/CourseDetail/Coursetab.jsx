import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Coursetab = () => {
    const tabtitle = [
        {
            name: "Introduction",
            course: "course 1",
            time: "2hours",
            rating: 4.8,
            star: FaStar,
        },
        {
            name: "Introduction",
            course: "course 1",
            time: "2hours",
            rating: 4.8,
            star: FaStar,
        },
        {
            name: "Introduction",
            course: "course 1",
            time: "2hours",
            rating: 4.8,
            star: FaStar,
        },
        {
            name: "Introduction",
            course: "course 1",
            time: "2hours",
            rating: 4.8,
            star: FaStar,
        },
        {
            name: "Introduction",
            course: "course 1",
            time: "2hours",
            rating: 4.8,
            star: FaStar,
        },{
            name: "Introduction",
            course: "course 1",
            time: "2hours",
            rating: 4.8,
            star: FaStar,
        }
    ]
    return (
        <>
            <div className='xl:w-7/12'>
                <div className='flex flex-row justify-between items-center sm:mx-3'>
                    <h2 className='xl:text-3xl font-semibold'>Course Content</h2>
                    <h4 className='text-sm font-semibold text-[#1700ff]'>Expand All</h4>
                </div>
            </div>
            <div className='xl:w-7/12 border my-3 sm:mx-2'>
                {
                    tabtitle.map((item,index) => {
                        return (
                            <div key={index} className='my-3 flex flex-row items-center border-b-2 pb-6 xl:mx-12 sm:mx-4'>
                                <div className='xl:w-11/12 flex flex-col sm:w-9/12'>
                                    <h2 className='text-xl font-semibold'>{item.name}</h2>
                                    <ul className='inline-block flex flex-row justify-between xl:w-5/12 items-center'>
                                        <li>{item.course}</li>
                                        <li className='list-disc'>{item.time}</li>
                                        <li className='list-disc'>{item.rating}</li>
                                        <li className='text-xl'><FaStar style={{ color: "#ffc000" }} /></li>
                                    </ul>
                                </div>
                                <div className='xl:w-1/12 grid justify-items-end sm:w-3/12'>
                                    <FaAngleDown size={30} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </>
    )
}

export default Coursetab;