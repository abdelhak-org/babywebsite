import React , {useState , useEffect} from 'react'
import Card from '../components/Card';
import axios from "axios"

const Shop = () => {
  const [products , setProducts ] = useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((response)=>{

     setProducts(response.data)
    })
  })
  return (
    <div  className ='flex mx-auto w-screen min-h-screen flex-wrap '>
      
      {
       !products && <h3 className='p-4 mt-8 mx-auto text-2xl  text-gray-800'> Content Loading .....</h3>


      }
      {
        
        products? products.map(product =>
         
            <Card key={product.id} category={product.category} description = {product.description}
            price={product.price} image ={product.image}/>


 

          
        ):
        <h3 className='p-4 mt-8 mx-auto text-2xl  text-gray-800'> Content Loading .....</h3>
      
      }
    </div>
  )
}

export default Shop
