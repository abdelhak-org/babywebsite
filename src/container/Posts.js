import React from 'react'
import useFetchData from '../hooks/useFetchData'
const Posts = () => {
    const { isPending , data } = useFetchData("posts")
  return (
    <div className='max-w-[1536px] min-h-screen bg-gray-light mx-auto '>
      {
        data.map(item => <p >{item.title}</p> )
      }
    </div>
  )
}

export default Posts
