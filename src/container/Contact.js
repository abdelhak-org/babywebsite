import React from 'react' ;
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const Contact = () => {

  return (
    <div className='py-8 px-4 md:w-full md:min-h-full   mt-16 mx-auto
     md:flex md:justify-between  sm:block 
    '>
     


   
      <div className='w-full  h-[100vh]   md:w-[50%] md:h-[100vh] 	'>
      < iframe className='w-full h-full '   id="gmap_canvas " title='usn'
       src="https://maps.google.com/maps?width=921&amp;height=514&amp;hl=en&amp;q=Leimbacher%20Str.%2010%20Wuppertal+(babyworld)&amp;t=p&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
       
       ></iframe>
      </div>
  




      <div className='md:w-[50%] sm:w-full sm:h-auto px-4 bg-gray-600  pt-8
      bg-gradient-to-b from-black to-transparent 
      '>
        <h2 className='font-bold text-xl tracking-wide color-white 
         my-8 text-center text-white
        '> Contact us </h2>
        <p className='text-white '>  
          <span className ="font-bold text-xl "> Adress :</span><br/>
          Leimacher street , 45 . 4545445 New York
        </p>
        <p className='text-white mt-4'>Tele: 01113654566</p>
        <div className='min-w-40 h-20  mt-4  mx-auto flex justify-center items-center '>
         <FaFacebook className='text-2xl text-blue-600 ml-4'/>
         <FaTwitter className='text-2xl text-blue-400 ml-4' />
         <FaYoutube className='text-2xl text-red-600 ml-4'/>
         <FaInstagram className='text-2xl text-rose-600 ml-4'/>

        </div>

      </div>
    </div>

  )
}

export default Contact
