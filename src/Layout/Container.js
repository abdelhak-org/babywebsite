import React from 'react'

const Container = (props) => {
  return (
    <div className="w-screen h-fit p-4 my-0 mx-auto">
      {props.children}
    </div>
  )
}

export default Container
