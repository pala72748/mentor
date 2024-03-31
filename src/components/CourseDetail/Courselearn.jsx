import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";
const Courselearn = () => {
    const learn = [
        { desc: "Workflow techniques, managing design assets, styles, components, grid and column layouts like true virtuosos." },
        { desc: "How to use Variables and put them to work creating even more complete prototypes." },
        { desc: "Use variables to make Light & Dark Modes + Compact & Comfortable spacing versions of your components." },
        { desc: "You’ll then take your new knowledge of variables to understand and create your own Design Tokens." },
        { desc: "Workflow techniques, managing design assets, styles, components, grid and column layouts like true virtuosos." },
        { desc: "Workflow techniques, managing design assets, styles, components, grid and column layouts like true virtuosos." },

    ]
    return (
        <>
            <div className='xl:w-7/12 border py-6 px-8 xl:h-[40vw] sm:mx-3 mr-8 sm:mt-8'>
                <div className='w-full'>
                    <h1 className='text-3xl font-semibold'>What You'll Learn</h1>
                </div>
                <div className='flex flex-row w-full grid grid-cols-2 gap-5 my-6 '>
                    {
                        learn.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-row w-full gap-5 my-6 '>
                                    <BsArrowUpRight size={70} />
                                    <p>{item.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Courselearn;