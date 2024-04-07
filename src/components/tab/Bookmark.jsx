import React from 'react'
import Course from '../Cards/Course';

const Bookmark = () => {
    return (
        <div className='xl:container font-poppins mx-auto items-center'>
            <div className='flex flex-row sm:flex-col sm:flex sm:mx-auto grid gap-8 grid-cols-3 lg:flex-row items-center justify-between p-6 lg:px-8'>
                <Course />
            </div>
        </div>
    )
}

export default Bookmark;