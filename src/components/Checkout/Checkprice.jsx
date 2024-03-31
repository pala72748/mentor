import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import { PiShareNetworkLight } from "react-icons/pi";
import { PiNotepadLight } from "react-icons/pi";

const Checkprice = () => {
    const include = [
        { desc: "16 hours on-demand video" },
        { desc: "Assignments" },
        { desc: "1 downloadable resource" },
        { desc: "Full lifetime access" },
        { desc: "Certificate of completion" },
        { desc: "Access on Tv" },
    ]
    return (
        <>
            <div className=' xl:h-[25vw] border xl:w-5/12 xl:ml-8 shadow-lg p-8 sm:mx-3 sm:my-6'>
                <div className='py-2'>
                    <h2 className='text-2xl font-semibold'>Figma UI UX Design Basic</h2>
                    <p className='py-5 border-b-2'>Become a Figma Pro with our in-depth Advanced Figma tutorial course. Discover advanced design strategies & so much more!</p>
                </div>
                <div className='py-2 w-full'>
                    <div className='flex justify-between'>
                        <h2 className='text-xl'>Course Certificate</h2>
                        <h2 className='text-xl'>Free</h2>
                    </div>
                    <div className='flex justify-between my-5'>
                        <h2 className='text-xl'>Total</h2>
                        <h2 className='text-xl'>$49</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkprice;