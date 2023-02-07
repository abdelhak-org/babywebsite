import React from 'react'
import imagetwo from "../assets/imagetwo.jpg"
const About = () => {
  return (
    <div className=" mb-4 w-screen  sm:block md:flex items-start justify-between relative">
      <div className='sm:w.full md:w-[50%] overflow-hidden relative'>
        <img src={imagetwo} alt='imag' className='h-[100] '/>
        <p  className=' py-4 px-4  text-white  absolute bottom-[-360px]  left-2 indent-0 font-normal text-md
        bg-gray-800/50 tracking-widest  hover:bottom-4  cursor-pointer
        hover:transition-all duration-150

        '
        >
          <span className='font-bold  text-2xl tracking-widest text-white'>Welcome to our website all about babies!

</span><br/>
        Babies are a bundle of joy, but can also bring challenges to new parents. From feeding and sleeping patterns to growth and development, there’s a lot to learn about caring for a newborn.

        Here, we aim to provide helpful information and resources for new parents.

        Feeding:<br/>

        Breastfeeding vs formula: pros and cons, tips and tricks
        Introducing solids: when to start and what foods to offer
        Sleeping:<br/>

        Sleep schedules and routines for newborns
        Safe sleep practices to reduce the risk of SIDS
        Development:<br/>

        Milestones to look out for in the first year
        How to support your baby’s physical, cognitive, and emotional growth
        Health & Safety:<br/>

        Vaccinations and check-ups
        Preventing and treating common illnesses
        Childproofing your home
        Along with articles and guides, our website also offers product recommendations and reviews to make your life as a parent easier.

        Thank you for visiting and we hope you find our resources helpful. Don’t hesitate to reach out with any questions or concerns. Happy parenting!





        
        
        </p>

      </div>
      <div  className='sm:w-full sm:pt-8 md:w-[50%] '>  
        <h3 className=' p-2 text-gray-black text-center text-2xl bold mx-auto capitalize ml-4
        mt-8
        
        
        '>The Happiness of New Parents !

        </h3>
        <p className='indent-4 py-8 px-4 text-md text-gray-600  tracking-widest leading-8 text-center'>
              The arrival of a newborn baby brings immense joy and happiness to parents. The bond between a parent and child is unbreakable, and the love and adoration parents feel for their child is immeasurable. Not only does a new baby bring unconditional love, but it also gives parents a sense of purpose and fulfillment. The joy of a new baby is often a shared experience between partners, strengthening their relationship and creating a deeper bond.

             
      </p>
      </div>





    </div>
  )
}

export default About
