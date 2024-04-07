import React from 'react';
import Button from '../Button/Button'; // Adjust the path if needed
import Img from '../Image/Img'; // Adjust the path if needed
import mask from "../../assets/Mask-group.png";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Learning = () => {
    const learning = [
        { img: mask, course: "Basic as Figma", percentage: 70 },
        { img: mask, course: "Mern Stack Course", percentage: 50 },
    ]
    return (
        <>
            <div className='xl:w-5/12 flex xl:gap-6 sm:w-[80vw] sm:flex-col'>
                <Button label={"Ongoing Course"} style={'py-3 w-full bg-[#2904f5] border border-black  text-white text-xl my-2'} />
                <Button label={"Complete Course"} style={'py-3 w-full bg-[#000000] border border-black  text-white text-xl my-2'} />
            </div>
            {
                learning.map((item, index) => {
                    return (
                        <div key={index} className='sm:w-[80vw] sm:h-auto flex sm:flex-col border rounded-lg shadow xl:p-8 xl:my-[100px] sm:my-10 gap-6 h-60'>
                            <div className=''>
                                {/* Use item.img instead of item.mask */}
                                <Img src={item.img} alt={"Mask Group"} className={"w-96"} />
                            </div>
                            <div className='xl:w-4/12 sm:px-4'>
                                <h1 className='text-xl font-semibold'>{item.course}</h1>
                                <Button label={"Continue Learning"} style={'xl:w-48 sm:w-[65vw] py-3 bg-[#2904f5] rounded-lg border border-black my-9 text-white text-sm my-2'} />
                            </div>
                            <div className='xl:w-4/12 sm:px-4 items-center justify-center sm:w-[80vw] sm:py-5'>
                                <h2 className='text-center text-xl '>Your Progress</h2>
                                <div className='xl:w-[100px] mx-auto xl:my-12 sm:my-4'>
                                    {/* Use item.percentage instead of undefined variable percentage */}
                                    <CircularProgressbar value={item.percentage} text={`${item.percentage}%`} strokeWidth={10} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Learning;
