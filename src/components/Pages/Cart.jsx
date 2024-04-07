import React from 'react'
import Header from '../Header/Header';
import Checkprice from '../Checkout/Checkprice';
import Button from '../Button/Button'; // Adjust the path if needed
import Img from '../Image/Img'; // Adjust the path if needed
import mask from "../../assets/Mask-group.png";
import star from '../../assets/star.png';
const Cart = () => {
    const learning = [
        { img: mask, course: "Basic as Figma", percentage: 70 },
        { img: mask, course: "Mern Stack Course", percentage: 50 },
    ]
    return (
        <>
            <Header />
            <div className='xl:container mx-auto my-[50px]' >
                <div className='flex sm:flex-col mx-2'>
                    <h2 className='text-3xl sm:text-center font-semibold font-Poopins'>Your Shopping Cart</h2>
                </div>
            </div>
            <div className='xl:container xl:mx-auto my-[50px]' >
                <div className='flex sm:flex-col mx-2'>
                    <div className='xl:w-7/12 sm:w-full'>
                        {
                            learning.map((item, index) => {
                                return (
                                    <div key={index} className='sm:mx-auto sm:w-[90vw] sm:h-auto flex sm:flex-col border rounded-lg shadow xl:p-8 xl:mb-10 sm:my-10 gap-6 h-60'>
                                        <div className=''>
                                            {/* Use item.img instead of item.mask */}
                                            <Img src={item.img} alt={"Mask Group"} className={"w-full h-full"} />
                                        </div>
                                        <div className='xl:w-6/12 sm:px-4 py-6'>
                                            <h1 className='text-xl font-semibold'>{item.course}</h1>
                                            <p>By khrisna Kapur</p>
                                            <div className='flex gap-3 my-2'>
                                                <h4>4.5</h4>
                                                <Img src={star} className={"w-12 h-auto"}/>
                                                <p>(24,532 rating)</p>
                                            </div>
                                            <span>Course 1  •  6 hours  </span>
                                        </div>
                                        <div className='xl:w-3/12 sm:px-4 py-6 items-center justify-center sm:w-[80vw] sm:py-5'>
                                            <h2 className='xl:text-center text-xl '>$55,999</h2>
                                            <p className='xl:text-center text-xs '>
                                                <a href="">Remove</a>
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className=' xl:h-[25vw]  border xl:w-5/12 xl:ml-8 shadow-lg p-8 sm:mx-3 sm:my-6'>
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
                </div>
            </div>
        </>
    )
}

export default Cart;