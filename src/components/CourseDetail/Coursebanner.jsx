import React from 'react'
import bg from "../../assets/bg.png";

const Coursebanner = () => {
    return (
        <>
            <div className='xl:h-[30vw] grid content-center w-full bg-[#F8F8F8] font-poppins bg-center bg-cover' style={{ backgroundImage: `url(${bg})` }}>
                <div className='xl:container mx-auto flex flex-row justify-between items-center '>
                    <div className='xl:w-1/2 sm:p-5'>
                        <h1 className='text-3xl font-semibold py-2'>Figma UI UX Design Basic</h1>
                        <p className='py-2'>Become a Figma Pro with our in-depth Advanced Figma tutorial course. Discover advanced design strategies & so much more!</p>
                        <div className='flex flex-row justify-space items-center gap-6' >
                            <button className='py-2 px-[40px] bg-[#fab437] text-black '>Best Seller</button>
                            <p>4.6</p>
                        </div>
                        <p className='py-8 gap-8' >15,790 Students <span className='font-semibold underline underline-offset-1'>Created by Ahmed Raheed</span></p>
                        <p className='py-4 gap-8 font-semibold' >Level: Beginner <span className='font-thin'>6 weeks 10 hours </span></p>
                        <button className='py-3 px-[100px] bg-[#2904f5] text-white rounded-lg'>Buy this course</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Coursebanner;