import logo from './logo.svg';
import './App.css';
import {useLayoutEffect, useState} from 'react'
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import SideFilter from './components/SideFilter';
import { useSearchParams } from 'react-router-dom';
function App() {
  const [loading,setLoading]= useState(false)
  const [products,setProducts]=useState([])
  const [searchParams,setSearchParams]=useSearchParams()

 
  const fetchData = () => {
    
    setLoading(true)
    fetch('https://dummyjson.com/products')
  .then(res => 
    res.json())
  .then((data)=>{
    let filterdProducts=data.products
    if(searchParams.get('rating')){
    filterdProducts = filterdProducts.filter(prod=>prod.rating>=searchParams.get('rating'))
    }
    if(searchParams.get('stock')){
      filterdProducts = filterdProducts.filter(prod=>prod.availabilityStatus===searchParams.get('stock'))
    }
    setProducts([...filterdProducts])
    console.log(filterdProducts)
    setLoading(false)
    
  })
}

useLayoutEffect(()=>{
 
 

  

  fetchData()
 
  
},[searchParams,setSearchParams])
  if(loading){
    return(
      <div>Loading...</div>
    )
  }
 

  return (
    <div>
     <Header/>
     <div className='grid grid-cols-6 '>
      <div className='col-span-1'>
      
      <SideFilter />
        
      </div>
     <div className=' col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 gap-2 grid'>
    
      {
      !loading&&products.map(prod=><ProductCard title={prod.title} price={prod.price} desc={prod.description} image={prod.thumbnail}/>)
      }
   
     </div>
     </div>
     
      
    </div>
  );
}

export default App;
