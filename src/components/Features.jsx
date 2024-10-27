import React from 'react'
import Lottie from 'lottie-react'
import animationData from "../images/AnimationPayment.json"
import animationCustomer from "../images/AnimationCustomer.json"
const Features = () => {
  return (

<div>
       <div className='flex justify-center items-center mt-48'>
      <div  className='w-1/2 ml-20'><Lottie animationData={animationData}/></div>
      <div className='ml-28' >
        <p className='mb-5'>YOU CAN</p>
        <h2 className='font-semibold text-2xl'><span className='text-blue-600 text-3xl font-semibold'>Monitor</span> payments</h2>
        <p className='w-4/5 mt-5 text-gray-600'>View real-time updates on successful payments,refunds and other transcation-related activities</p>
        <a className='absolute text-blue-600 font-semibold mt-5' href="#">Learn more</a>
        
      </div>
    </div>


    <div className='flex justify-center items-center '>
      
      <div className='ml-28' >
        <p className='mb-5'>YOU CAN</p>
        <h2 className='font-semibold text-2xl'><span className='text-blue-600 text-3xl font-semibold'>Manage</span> payments</h2>
        <p className='w-4/5 mt-5 text-gray-600'>View real-time updates on successful payments,refunds and other transcation-related activities</p>
        <a className='absolute text-blue-600 font-semibold mt-5' href="#">Learn more</a>

      </div>
      <div  className='w-1/2 ml-20'><Lottie animationData={animationCustomer}/></div>
    </div>
    
</div>

  



  )
}

export default Features
