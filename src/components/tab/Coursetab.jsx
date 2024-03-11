import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import course from '../../assets/course.png'
import star from '../../assets/star.png'
const Coursetab = () => {
    const percentage = 75
    return (
        <div className='container xl:mx-auto sm:w-[00px]'>
            <div className='w-full flex xl:flex-row sm:flex-col sm:w-[80vw]'>
                <div className='xl:w-2/6 items-center sm:w-[80vw] sm:items-center'>
                    <img src={course} alt="" width={380} />
                </div>
                <div className='w-2/6 xl:px-8 sm:w-[80vw] sm:py-5'>
                    <h1 className='text-2xl font-semibold sm:text-xl '>Python for Financial Analysis Next and Algorithmic Trading</h1>
                    <p className='py-4'>Join us on a journey to mastery in the world of finance and technology. Learn Python for Financial Analysis Next and Algorithmic Trading to revolutionize your career and achieve pro status in the financial industry.</p>
                    <div className='flex flex row  w-full'>
                        <h2>4.5</h2>
                        <img src={star} className='px-5' width={150} alt="" />
                    </div>
                    <div className=' mt-6'>
                        <h2>$495</h2>
                    </div>
                    <button className='py-3 px-6 bg-[#2904f5] text-white mt-3 rounded-lg'>Continue learning</button>
                </div>
                <div className='w-2/6 items-center justify-center sm:w-[80vw] sm:py-5'>
                    <h2 className='text-center text-xl '>Your Progress</h2>
                    <div className='w-[200px] mx-auto my-12'>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={5} />;
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coursetab