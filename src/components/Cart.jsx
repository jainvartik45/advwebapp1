import React from 'react'
import { useStateContext } from '../context/ContextProvider'
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';


import { cartData } from '../data/dummy';
import { Button } from '.';


const Cart = () => {

  


const {currentcolor,value,setValue} = useStateContext();

const increase=()=>{
      setValue(value+1);
}

const decrease=()=>{
  {value >0 && setValue(value-1)}
}

  return (
    
    <div className=' fixed nav-item top-20 right-0 bottom-5'>
     
       {/* <div className='float-right h-100 w-100 p-4 border-4 bg-white'>
       <div className='justify-between items-center p-4 ml-4'>
       <p>
        cart items
       </p>
       </div>
     
        </div> */}
        {/* <div>
        <p>hey</p>
        </div> */}
         <div className="float-right  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-light-gray md:w-400 p-8 h-400">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-base">Shopping Cart</p>
         
        </div>
        {cartData?.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center   leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
                <img className="rounded-lg h-54 w-16" src={item.image} alt="" />
                <div>
                  <p className="font-semibold text-base">{item.name}</p>
                  <p className="text-gray-400 dark:text-gray-400 text-sm font-semibold">{item.category}</p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">{item.price}</p>
                    <div className="flex items-center border-1 border-r-0 border-color rounded">
                      <p className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 ">
                        <button onClick={decrease}>
                        <AiOutlineMinus />
                        </button>
                        </p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">{value}</p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                      <button onClick={increase}>
                        <AiOutlinePlus />
                        </button>
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="White"
            bgcolor={currentcolor}
            text="Place Order"
            borderRadius="10px"
            width="full"
            
          />
        </div>
      </div>
        
    
      </div>
      
  )
}

export default Cart