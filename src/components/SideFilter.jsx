import React,{useLayoutEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom'
const SideFilter = () => {

const [searchParams,setSearchParams]=useSearchParams()
useLayoutEffect(()=>{
  let size = searchParams.size
  console.log(size)
  if(!size){
    console.log(searchParams.size)
    console.log('running')
    setSearchParams(params =>{
      let searchParams = new URLSearchParams(params)
      searchParams.set('stock','In Stock')
      return searchParams
    })}
},[searchParams])

const handleChange=(e)=>{
  setSearchParams(params=>{
     const newSearchParams = new URLSearchParams(params)
     if(params.has(e.target.name)) {
      newSearchParams.set(e.target.name,e.target.value)
      return newSearchParams
     }
     newSearchParams.append(e.target.name,e.target.value)
     return newSearchParams
   },{
    replace:true
   })
 
 
 }

  return (
    <div className='bg-white p-2'>
        <div onChange={(e)=>handleChange(e)}>
            <h3>Stock Status</h3>
           <input type='radio' id='inStock' name='stock' value='In Stock' checked={searchParams.get('stock')==='In Stock'}  >
           </input>
           <label>In stock</label>
           <input type='radio' id='outOfStock' name='stock' value='Low Stock' checked={searchParams.get('stock')==='Low Stock'} >
           </input>
           <label>Out of stock</label>
            </div>
            <div onChange={(e)=>handleChange(e)} >
            <h3>Rating</h3>
            
           <input type='radio'  name='rating' value='1'  checked={searchParams.get('rating')==='1'} >
           </input>
           
           <input type='radio'  name='rating' value='2' checked={searchParams.get('rating')==='2'} >
           </input>
           <input type='radio' name='rating' value='3'  checked={searchParams.get('rating')==='3'} >
           </input>
           
           <input type='radio'  name='rating' value='4' checked={searchParams.get('rating')==='4'} >
           </input>
   
           <input type='radio'  name='rating' value='5'  checked={searchParams.get('rating')==='5'} >
           </input>
           
         
            </div>

    </div>
  )
}

export default SideFilter