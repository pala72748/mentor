import React from 'react'
import Header from '../Header/Header';
import bg from "../../assets/bg.png";
import Card from '../Mentor/Card';
import Searchselect from '../Mentor/SearchSelect';
const Mentor = () => {
    return (
        <>
            <Header />
            <div className='mx-auto w-full bg-[#F8F8F8] font-poppins bg-center bg-cover' style={{ backgroundImage: `url(${bg})` }}>
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
            <div className='xl:container mx-auto mt-8 '>
                <div>
                    <div>
                        <h2 className='text-2xl font-semibold sm:text-center'>Top Mentors in Product Design</h2>
                    </div>
                </div>
            </div>
            <Card/>
            <Card/>
            <Card/>
            <Searchselect style={"w-6/12"} label={"Train Number"} />
        </>
    )
}

export default Mentor;