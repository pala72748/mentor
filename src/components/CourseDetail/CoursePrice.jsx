import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import { PiShareNetworkLight } from "react-icons/pi";
import { PiNotepadLight } from "react-icons/pi";

const CoursePrice = () => {
    const include = [
        { desc: "16 hours on-demand video" },
        { desc: "Assignments" },
        { desc: "1 downloadable resource" },
        { desc: "Full lifetime access" },
        { desc: "Certificate of completion" },
        { desc: "Access on Tv" },
    ]
    return (
        <>
            <div className=' xl:h-[40vw] border xl:w-5/12 xl:ml-8 shadow-lg p-8 sm:mx-3 sm:my-6'>
                <div className='flex flex-row  items-center gap-4 pb-3'>
                    <h2 className='text-4xl font-bold'>$400</h2>
                    <h3 className='text-lg font-semibold text-red-400 line-through'>$800</h3>
                </div>
                <div className='py-2'>
                    <h2 className='text-xl font-semibold'>Basic Certificate - 7 course series</h2>
                </div>
                <div className='py-2 w-full'>
                    <h2 className='text-lg font-semibold'>This course includes:</h2>
                    <div className='flex flex-row w-full grid grid-cols-2 gap-5 my-6 '>
                        {
                            include.map((item, index) => {
                                return (
                                    <div key={index} className='flex flex-row w-full gap-5 '>
                                        <BsArrowUpRight size={20} />
                                        <p className='text-sm'>{item.desc}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className='py-3 w-full bg-[#2904f5] text-white text-xl rounded-lg'>Buy this course</button>
                    <button className='py-3 w-full bg-[#fff] border border-black  text-dark text-xl rounded-lg my-2'>View Cart</button>
                </div>
                <div className='flex flex-row justify-evenly mt-3'>
                    <div className='flex flex-row '>
                        <PiShareNetworkLight size={30}/>
                        <p className='items-center'>Share</p>
                    </div>
                    <div className='flex flex-row '>
                        <PiNotepadLight size={30}/>
                        <p className='items-center'>Save</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoursePrice;