import React from 'react';
import { FaPlay } from 'react-icons/fa';
import One from "../../assets/images/1.png";
import person from "../../assets/person.png";
import two from "../../assets/images/2.png";
import three from "../../assets/images/3.png";
import four from "../../assets/images/4.png";
import five from "../../assets/images/5.png";
import six from "../../assets/images/6.png";

const Coursesimilar = () => {
    const course = [
        {
            img: One,
            lesson: "25x Lesson",
            name: "Wade Warren",
            developer: "Python Developer",
            button: "Design",
        },
        {
            img: two,
            lesson: "25x Lesson",
            name: "Wade Warren",
            developer: "Python Developer",
            button: "Design",
        },
        {
            img: three,
            lesson: "25x Lesson",
            name: "Wade Warren",
            developer: "Python Developer",
            button: "Design",
        },
        {
            img: four,
            lesson: "25x Lesson",
            name: "Wade Warren",
            developer: "Python Developer",
            button: "Design",
        },
        {
            img: five,
            lesson: "25x Lesson",
            name: "Wade Warren",
            developer: "Python Developer",
            button: "Design",
        },
        {
            img: six,
            lesson: "25x Lesson",
            name: "Wade Warren",
            developer: "Python Developer",
            button: "Design",
        },
    ];
    return (
        <>
            <div className='xl:w-7/12'>
                <div className='flex flex-row justify-between items-center sm:mx-3'>
                    <h2 className='text-3xl font-semibold'>Course Similar</h2>
                </div>
            </div>
            <div className='xl:w-7/12 my-3 flex sm:w-full grid xl:grid-cols-2 gap-6 sm:grid-cols-1 sm:mx-3'>
                {
                    course.map((courseItem, index) => {
                        return (
                            <div key={index} className="sm:w-full bg-white border my-6 border-gray-200 rounded-lg shadow">
                                <a href="#">
                                    <img className="rounded-t-lg" src={courseItem.img} alt="" />
                                </a>
                                <div className="m-5 flex flex-row items-center">
                                    <FaPlay style={{ fontSize: 20, backgroundColor: "#00ff47", color: "white", padding: 5, borderRadius: 50 }} />
                                    <p className="pl-4">{courseItem.lesson}</p>
                                </div>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white border-b-2 pb-6">Supervised Machine Learning: Regression and Classification</h5>
                                    </a>
                                    <div className="mx-auto flex flex-row flex-wrap items-center justify-between">
                                        <div className="flex flex-row my-6">
                                            <img src={person} className="w-8 h-8" alt="" />
                                            <div className="ml-4">
                                                <h2 className="text-[14px] font-semibold">{courseItem.name}</h2>
                                                <p className="text-[12px]">{courseItem.developer}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="#" className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                {courseItem.button}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
};

export default Coursesimilar;
