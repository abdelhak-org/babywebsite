import React from 'react'
import imagetwo from "../assets/imagetwo.jpg"
const About = () => {
  return (
    <div className=" mb-4 w-screen  sm:block md:flex items-start justify-between relative">
      <div className='sm:w.full md:w-[50%] overflow-hidden relative'>
        <img src={imagetwo} alt='imag' className='h-[100] '/>
        <p  className=' py-4 px-4  text-white  absolute bottom-[0px]  left-2 indent-0 font-normal text-md
        bg-gray-800/50 tracking-widest  hover:bottom-4  cursor-pointer
        hover:transition-all duration-150

        '
        >
          <span className='font-bold  text-2xl tracking-widest text-white'>Welcome to our website all about babies!

</span><br/>
          First and foremost, it's important to make sure your baby is healthy and happy. Regular doctor visits and vaccinations are essential, and we'll provide you with information and resources to help you keep your baby in top form. And when it comes to feeding time, whether you're breastfeeding or bottle-feeding, we'll provide you with the information you need to make sure your baby is getting the right nutrients.




        
        
        </p>

      </div>
      <div  className='sm:w-full sm:pt-4 md:w-[50%] '>  
        <h3 className=' p-2 text-gray-black text-center text-2xl bold mx-auto capitalize ml-4
        mt-8
        
        
        '>The Happiness of New Parents !

        </h3>
        <p className='indent-4 py-4 px-4 text-md text-gray-600  tracking-widest leading-8 text-center'>
          Welcome to our website all about babies! Whether you're an expectant parent or simply love learning about the joys and challenges of parenting, you've come to the right place. Here, we aim to provide you with the latest information and resources to help you care for your little one, every step of the way.<br/>

          Babies are amazing creatures and bring so much joy and wonder into our lives. From their first smile to their first steps, there are countless milestones to look forward to. And as much as we love these precious moments, we also know that caring for a baby can be tough. That's why we're here to help!

             
      </p>
      </div>





    </div>
  )
}

export default About
