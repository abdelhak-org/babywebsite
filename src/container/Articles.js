import React  from 'react';
import Article from "../components/Article"

const Articles = ({articles ,currentUser}) => {


      
  return (
    <div className='py-2 md:py-8  px-2 md:px-4 w-screen   md:w-[80%] h-auto  my-4  mx-auto'>
      
      
      {articles &&articles.slice(0,10).map((item)=>{

        return (   
        
          <Article  
          id={item.id} title={item.title}  body={item.body} 
          currentUser={currentUser}/>
        
        )
      })
      
      }
    </div>
  )
}

export default Articles
