import React from 'react'
import Lottie from 'lottie-react'
import animationData from "../images/Animation.json"


const Hero = () => {
  return (
    
    <div class="max-w-[85rem] mx-auto mt-32 px-4 sm:px-6 lg:px-8">
     
      <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Optimize business <span class="text-blue-600">Payments</span></h1>
          <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">Payment processing platform that facilitates transactions between businesses and their customers.</p>
    
     
          <div class="mt-7 grid gap-3 w-full sm:inline-flex">
            <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
              Open account
            </a>
            
          </div>
        
    
        
      
        
        </div>
      
       <Lottie animationData={animationData} className='w-full h-96'/>
     
      </div>
    
    </div>
   
  )
}

export default Hero
