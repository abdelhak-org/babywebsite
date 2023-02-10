import React  from 'react';
import Article from "../components/Article"

const Articles = ({articles ,isauth}) => {


      
  return (
    <div className='py-2 md:py-8  px-2 md:px-4 w-screen   md:w-[80%] h-auto  my-4  mx-auto'>
      {articles &&articles.slice(0,10).map((article)=>{
       return (
         
         <Article  
          id={article.id} title={article.title}  body={ article.body}  isauth={isauth}/>
         


       )
      })
      
      }
    </div>
  )
}

export default Articles
