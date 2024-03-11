import React from 'react'
import Header from '../Header/Header';
import login from "../../assets/login.png";

const Otp = () => {
    return (
        <>
            <Header />
            <div className="bg-[#2500f9] text-gray-900 flex justify-between h-screen font-poppins">
                <div className=" m-0 sm:m-10 shadow sm:rounded-lg flex justify-between flex-1">
                    <div className="lg:w-2/6 xl:w-3/12 p-6 sm:p-12 sm:hidden">
                        <h2 className='text-white text-3xl font-semibold '>Start your Learning with Kjxsofttech</h2>
                        <img src={login} className='align-bottom fixed bottom-0' alt="" />
                    </div>
                    <div className="lg:w-4/6 xl:w-9/12 sm:w-[80vw] w-screen xl:p-6 bg-white  rounded-[16px]">
                        <div className="mt-12 flex flex-col">
                            <h1 className="text-2xl xl:text-3xl sm:text-center text-start sm:m-0 ml-[250px] font-extrabold">
                                Verify Your Code
                            </h1>
                            <div className="lg:w-4/6 xl:w-6/12 xl:mx-auto  sm:w-[80vw] mt-10 rounded ">
                                <form className=" px-4 py-6">
                                    <div className="flex gap-2 mb-6">
                                        <input className="w-12 h-12 sm:w-10 sm:h-10 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required />
                                        <input className="w-12 h-12 sm:w-10 sm:h-10 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required />
                                        <input className="w-12 h-12 sm:w-10 sm:h-10 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required />
                                        <input className="w-12 h-12 sm:w-10 sm:h-10 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required />
                                        <input className="w-12 h-12 sm:w-10 sm:h-10 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required />
                                        <input className="w-12 h-12 sm:w-10 sm:h-10 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500" type="text" maxlength="1" pattern="[0-9]" inputmode="numeric" autocomplete="one-time-code" required />
                                    </div>
                                    <div className="flex flex-col ">
                                        <p className='mr-12 my-4'>Enter the passcode your just received with the email ending with ********ish@gmail.com   </p>
                                        <button className="bg-[#2500f9] hover:bg-teal-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline" type="button">
                                            Verify
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Otp