import React from "react";
import Header from "../Header/Header";
import bg from "../../assets/bg.png";
import { LiaUserSolid } from "react-icons/lia";

const Profile = () => {

  const input = [
    {
      label: "Full name",
      type: "text",
      placeholder: "Enter full name",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Enter Your Email",
    },
    {
      label: "Phone Number",
      type: "number",
      placeholder: "Enter Your Phone Number",
    },
    {
      label: "Username",
      type: "text",
      placeholder: "Enter Username",
    },
    {
      label: "Language",
      type: "text",
      placeholder: "Enter full name",
    },
    {
      label: "Full name",
      type: "text",
      placeholder: "Enter full name",
    },
  ]

  return (
    <>
      <Header />
      <div className='mx-auto w-full bg-[#F8F8F8] font-poppins bg-center bg-cover' style={{ backgroundImage: `url(${bg})` }}>
        <div className='flex flex-col justify-center items-center h-72 border-2'>
          <div className=' mx-auto grid justify-items-center'>
            <LiaUserSolid size={100} style={{ backgroundColor: "#d9d9d9", borderRadius: 50, padding: 30 }} />
            <h2 className='text-3xl font-bold sm:text-2xl'>Hi Ope, Let’s start Your Learning</h2>
          </div>
        </div>
      </div>
      <div className="xl:container xl:mx-auto sm:mx-4 md:mx-4 h-[150vh] ">
        <div className="flex flex-col">
          <div className="w-full mt-10 flex flex-row grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-1">
            {
              input.map((item, index) => {
                return (
                  <div key={index} className="w-full sm:col-span-3">
                    <label htmlFor={item.label} className="block text-sm font-medium leading-6 text-gray-900">
                      {item.label}
                    </label>
                    <div className="mt-2">
                      <input
                        type={item.type}
                        name={item.name}
                        id="first-name"
                        placeholder={item.placeholder}
                        autoComplete="given-name"
                        className="block w-full bg-[#f4f2ff] pl-4 rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="w-full mt-10 flex flex-row grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
            <div className="w-full sm:col-span-3">
              <label htmlFor="textarea" className="block text-sm font-medium leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  type="text"
                  name="text"
                  rows={8}
                  id="first-name"
                  placeholder="Enter Your Message"
                  autoComplete="given-name"
                  className="block w-full bg-[#f4f2ff] pl-4 rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-10 flex flex-row justify-center items-center gap-x-6 gap-y-8 sm:grid-cols-1">
            <div className="w-full sm:col-span-3 grid justify-items-center">
              <button className='py-3 px-[100px] bg-[#2904f5] text-white rounded-lg'>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
