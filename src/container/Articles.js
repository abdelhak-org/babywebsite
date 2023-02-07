import React  from 'react';
import Article from "../components/Article"

const Articles = ({articles }) => {


      
  return (
    <div className='py-8 px-4 w-[80%] h-auto  my-4 mx-auto'>
      {articles &&articles.slice(0,10).map((article)=>{
       return (
         
         <Article  
          id={article.id} title={article.title}  body={ article.body}/>
         


       )
      })
      
      }
    </div>
  )
}

export default Articles
