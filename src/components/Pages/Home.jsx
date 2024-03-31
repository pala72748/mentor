import React from 'react'
import Header from '../Header/Header'
import banner from "../../assets/banner.png";
import student from "../../assets/student.png";
import user from "../../assets/user.png";
import search from "../../assets/search.png";
import laptop from "../../assets/laptop.png";
import graduate from "../../assets/graduate.png";
import Cards from '../Cards/Cards';
import Course from '../Cards/Course';
import Footer from '../Footer/Footer';
import bg from "../../assets/bg.png";

const Home = () => {
    return (
        <>
            <Header />
            <div className='w-full bg-center bg-cover' style={{ backgroundImage: `url(${bg})` }} >
                <div  className='w-full xl:container mx-auto font-poppins flex sm:flex sm:flex-col-reverse items-center justify-between p-6 lg:px-8 '>
                    <div className=' lg:w-1/2 sm:w-full'>
                        <h2 className='xl:text-6xl mb-8 font-bold sm:text-4xl'>Learn a new skill with Kjxsoftech</h2>
                        <p className='text-2xl sm:w-full'>Acquire a new skill, initiate a project, and achieve your desired career path.</p>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-start mt-10">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded ">
                                Find Your Mentor
                            </button>
                            <button class=" text-black font-bold py-2 px-4 rounded mx-2">
                                Become a Mentor
                            </button>
                        </div>
                        <div className='my-6 flex items-center'>
                            <img src={student} alt="" />
                            <div className='mx-5 flex flex-col'>
                                <h2 className='text-xl font-semibold'>250K</h2>
                                <p className='sm:text-md'>HAPPY STUDENTS</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 sm:h-auto'>
                        <img className="h-auto w-[650px] sm:w-full " src={banner} alt="" />
                    </div>
                </div>
            </div>
            <div className='xl:container font-poppins mx-auto lg:p-6 max-w-[1300px] sm:w-full '>
                <div className='text-center'>
                    <h2 className='text-xl py-5'>WHY CHOOSE US</h2>
                    <p className='text-4xl mb-8 font-bold sm:text-3xl'>The Benefits You Get When You Study at Kjxsoftech</p>
                </div>
            </div>
            <div className='xl:container md:mx-auto  font-poppins mx-auto flex items-center justify-between'>
                <div className='flex md:mx-auto xl:flex-row sm:w-11/12 sm:mx-4 justify-center items-center grid sm:grid-cols-1  sm:flex-col sm:items-center md:grid-cols-2 md:gap-2 grid-cols-4 gap-4'>
                    <Cards />
                </div>
            </div>
            <div className='mx-auto font-poppins flex max-w-7xl items-center justify-between p-6 lg:px-8 mt-12 '>
                <div className='flex flex-row items-center sm:flex-col sm:flex sm:w-full'>
                    <div className='w-full lg:w-1/2'>
                        <img className="h-auto w-[550px]" src={user} alt="" />
                    </div>
                    <div className='w-full lg:w-1/2 ml-8 sm:mt-8'>
                        <h2 className='text-4xl mb-8 font-bold'>Talented and Highly Qualified Tutors to Serve You for Online Study</h2>
                        <p className='text-xl'>Want to ace your next job interview? Successfully build your startup? Itching to learn high-demand skills? Work smart with an online mentor or coach by your side to offer expert advice and guidance to match your zeal. </p>
                        <div className='my-6 flex items-center'>
                            <img src={search} alt="" />
                            <div className='mx-5'>
                                <h2 className='text-xl font-semibold'>Find Your Mentor</h2>
                                <p>Explore our growing catalogue of experienced mentors until you find the perfect fit.</p>
                            </div>
                        </div>
                        <div className='my-6 flex items-center'>
                            <img src={laptop} alt="" />
                            <div className='mx-5'>
                                <h2 className='text-xl font-semibold'>Find Your Mentor</h2>
                                <p>Explore our growing catalogue of experienced mentors until you find the perfect fit.</p>
                            </div>
                        </div>
                        <div className='my-6 flex items-center'>
                            <img src={graduate} alt="" />
                            <div className='mx-8'>
                                <h2 className='text-xl font-semibold'>Find Your Mentor</h2>
                                <p>Explore our growing catalogue of experienced mentors until you find the perfect fit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='xl:container font-poppins mx-auto max-w-[1300px] sm:w-full'>
                <div className='flex flex-row items-center justify-between p-6 lg:px-8 sm:flex-col'>
                    <div className='xl:w-5/6 mb-4 lg:text-left lg:mb-0 sm:w-full sm:text-center md:text-left ' >
                        <h2 className="text-2xl lg:text-4xl font-semibold">Our Most Popular Courses</h2>
                        <p className="mt-2">Let’s join our best classes with our famous instructor and institutes</p>
                    </div>
                    <div className='xl:w-1/6 lg:text-right sm:w-full text-center'>
                        <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Explore Courses</a>
                    </div>
                </div>
            </div>
            <div className='xl:container font-poppins mx-auto  items-center lg:h-screen'>
                <div className='flex flex-row sm:flex-col sm:flex sm:mx-auto grid gap-8 grid-cols-3 lg:flex-row items-center justify-between p-6 lg:px-8'>
                    <Course />
                </div>
            </div>
            <div className='xl:container font-poppins mx-auto lg:p-6  sm:w-full '>
                <div className='text-center'>
                    <h2 className='text-5xl py-5 font-bold'>Meet Your Instructors</h2>
                </div>
            </div>
            <div className='xl:container font-poppins mx-auto items-center'>
                <div className='flex flex-row sm:flex-col sm:flex sm:mx-auto grid gap-8 grid-cols-3 lg:flex-row items-center justify-between p-6 lg:px-8'>
                    <Course />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home