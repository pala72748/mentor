import React from 'react'
import mentor from '../../assets/mentor1.png';
import two from '../../assets/mentor2.png';
import three from '../../assets/mentor3.png';
import { FaUserGraduate } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { CiBookmarkCheck } from "react-icons/ci";

const Card = () => {
    const card = [
        {
            image: mentor,
            button: "Project Designer",
            name: "Guy Hawkins",
            student: "400 + Students",
            course: "32 Course",
            rating: "4.4 (4358)",
            experience: "6yrs + Experience",
        },
        {
            image: two,
            button: "Project Designer",
            name: "Guy Hawkins",
            student: "400 + Students",
            course: "32 Course",
            rating: "4.4 (4358)",
            experience: "6yrs + Experience",
        },
        {
            image: three,
            button: "Project Designer",
            name: "Guy Hawkins",
            student: "400 + Students",
            course: "32 Course",
            rating: "4.4 (4358)",
            experience: "6yrs + Experience",
        },
        {
            image: mentor,
            button: "Project Designer",
            name: "Guy Hawkins",
            student: "400 + Students",
            course: "32 Course",
            rating: "4.4 (4358)",
            experience: "6yrs + Experience",
        },
    ]
    return (
        <>
            <div className='xl:container mx-auto my-10'>
                <div className='flex sm:flex-col'>
                    {
                        card.map((item, index) => {
                            return (
                                <div key={index} className='xl:container mx-auto xl:w-3/12'>
                                    <div className='mx-2 border xl:h-[450px] sm:h-[480px] shadow-lg rounded-3xl bg-[#0077fc] px-4'>
                                        <div>
                                            <img src={item.image} alt="" className='py-4' />
                                        </div>
                                        <div className='grid justify-items-end mx-6 mt-[-30px]'>
                                            <button className='bg-[#ffce54] rounded-full px-4 py-2 '>{item.button}</button>
                                        </div>
                                        <div className='mt-8'>
                                            <h2 className='text-xl font-normal text-white'>{item.name}</h2>
                                        </div>
                                        <div className='flex gap-4 '>
                                            <div className='flex gap-2 items-center mt-3 sm:w-1/2'>
                                                <FaUserGraduate style={{ color: "#fff" }} />
                                                <p className='text-white text-sm'>{item.student}</p>
                                            </div>
                                            <div className='flex gap-2 items-center mt-3 sm:w-1/2'>
                                                <FaAddressBook style={{ color: "#fff" }} />
                                                <p className='text-white text-sm'>{item.course}</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-4 justify-between'>
                                            <div className='flex gap-2 items-center mt-3 sm:w-1/2'>
                                                <IoIosStar style={{ color: "#fff" }} />
                                                <p className='text-white text-sm'>{item.rating}</p>
                                            </div>
                                            <div className='flex gap-2 items-center mt-3 sm:w-1/2'>
                                                <CiBookmarkCheck style={{ color: "#fff" }} />
                                                <p className='text-white text-sm'>{item.experience}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Card;