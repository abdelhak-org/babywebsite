import  React  from 'react'
import AutoPlay from '../components/AutoPlay'
import MyArticles from '../components/MyArticles'

const Home = ({currentUser }) => {




  return (
    <div className='py-0 px-4 w-full h-auto  mb-32'>
      <AutoPlay/>
      <MyArticles currentUser ={currentUser}/>
    </div>
  )
}

export default Home
