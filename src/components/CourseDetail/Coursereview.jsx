import React from 'react'
import agent from '../../assets/agent.png';
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";

const Coursereview = () => {
    return (
        <>
            <>
                <div className='xl:w-7/12'>
                    <div className='flex flex-row justify-between items-center sm:mx-3'>
                        <h2 className='text-3xl font-semibold'>Reviews</h2>
                    </div>
                </div>
                <div className='xl:w-7/12 border my-3 sm:mx-2 '>
                    <div className='my-6 flex flex-row justify-space items-center pb-6 xl:mx-12 sm:mx-4 sm:flex-col  '>
                        <div className='xl:w-2/12 flex flex-col sm:w-9/12 grid sm:justify-items-center'>
                            <img src={agent} width={150} alt="" />
                        </div>
                        <div className='xl:w-10/12 sm:w-full ml-5'>
                            <h2 className='text-xl font-semibold text-black'>Sam Jesse</h2>
                            <div className='flex flex-row justify-space items-center gap-6 my-4' >
                                <p>i really liked the course very much but there were many things which were not there when you were designing nd that leads to bad practice. like creating styles, font styles. plugin styles, map and many more</p>
                            </div>
                            <div className='flex gap-8'>
                                <ul className='flex items-center gap-2'>
                                    <li><BiLike size={20} /></li>
                                    <li><BiDislike size={20} /></li>
                                    <li><FcLike size={20} /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default Coursereview;