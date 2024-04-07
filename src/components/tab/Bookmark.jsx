import React from 'react'
import Course from '../Cards/Course';

const Bookmark = () => {
    return (
        <div className='xl:container mx-auto items-center font-poppins '>
            <div className='flex flex-row sm:flex-col sm:flex sm:w-[90vw]  grid gap-8 grid-cols-3 lg:flex-row items-center justify-between p-6 lg:px-8'>
                <Course /> {/* Changed Course to CourseCard */}
            </div>
        </div>
    )
}

export default Bookmark;