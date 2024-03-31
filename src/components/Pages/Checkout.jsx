import React, { useState } from 'react'
import Header from '../Header/Header';
import card from '../../assets/card.png';
import paypal from '../../assets/paypal.png';
import visa from '../../assets/visa.png';
import Checkprice from '../Checkout/Checkprice';
const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <Header />
      <div className='xl:container mx-auto my-[100px]' >
        <div className='flex sm:flex-col mx-2'>
          <div className='xl:w-7/12 sm:w-full'>
            <h2 className='text-4xl font-bold font-Poopins'>Check Out</h2>
            <div className='mt-8 flex gap-5'>
              <img src={card} alt="" className='h-auto sm:w-4/12' width={200} height={34} />
              <img src={paypal} alt="" className='h-auto sm:w-4/12' width={200} height={34}/>
            </div>
            <div className="w-full sm:col-span-3 mt-10">
              <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                Card Number
              </label>
              <div className="mt-2 relative">
                <input
                  type="button"
                  name=""
                  id="first-name"
                  placeholder="1234 1234 1234 1234"
                  autoComplete="given-name"
                  className="absolute  block w-full  pl-4 rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <img src={visa} alt="" className='grid justify-items-center justify-end' />
              </div>
            </div>
            <div className='flex gap-6'>
              <div className="w-6/12 sm:col-span-3 mt-10">
                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                  Expiration
                </label>
                <div className="mt-2">
                  <input
                    type="button"
                    name=""
                    id="first-name"
                    placeholder="1234 1234 1234 1234"
                    autoComplete="given-name"
                    className="block w-full  pl-4 rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="w-6/12 sm:col-span-3 mt-10">
                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                  CVC
                </label>
                <div className="mt-2">
                  <input
                    type="button"
                    name=""
                    id="first-name"
                    placeholder="1234 1234 1234 1234"
                    autoComplete="given-name"
                    className="block w-full  pl-4 rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="w-full sm:col-span-3 mt-10">
              <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  className="block w-full  pl-4 rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={selectedOption}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="w-full sm:col-span-3 mt-10">
              <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                How did you First hear about us (optional)
              </label>
              <div className="mt-2">
                <select
                  className="block w-full  pl-4 rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={selectedOption}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </div>
            <div className='w-8/12 my-5'>
              <button className='py-3 w-full bg-[#2904f5] border border-black  text-white text-xl rounded-lg my-2'>View Cart</button>
            </div>
          </div>
          <Checkprice/>
        </div>
      </div>
    </>
  )
}

export default Checkout;