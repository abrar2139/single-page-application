import React from 'react'
import {useCart} from 'react-use-cart'
import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
 
export const Homepage = () => {
  const[products, setProducts] =useState([])
  const url= "https://dummyjson.com/products"

  async function fetchProducts(){
      const res= await fetch(url)
      const data= await res.json()
      console.log(data.products)
      setProducts(data.products)
  }
  useEffect(()=>{
fetchProducts()
  },[])
  return (
    <>
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://5.imimg.com/data5/SELLER/Default/2023/4/297315805/CU/SM/OX/58997087/multi-functional-mobile-phone-repair-tools-storage-box-500x500.jpg"/>
    </div>
  </div>
</section>
     <h1 className='text-center text-5xl font-bold text-yellow-300 hover:text-yellow-500 mb-5'>Our Products</h1>
     <section className=' border-red-600 '>
       <div className="flex flex-wrap flex-col-3 hover:boxshadow-9xl-black py-10 " style={{boxShadow:"0 10px 10px 10px rgba(0,0,0,0.1)"}}>
        {
        products.map((item, index )=>{
           return(
             <Itemcard{...item} key={index} item={item}/>
           )})
          } 
       </div>
     </section>
    </>
  )
}   
const Itemcard = (props) => {
  
    const {addItem} = useCart()
    const Twofunc = () =>{
      addItem(props.item)
      if(()=>addItem(props.item)){

        toast.success("Now Selected Item is in Your Cart")
      }
    
    }
    return <div class="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg">
    <Link class="block relative h-48 rounded overflow-hidden">
<img alt="ecommerce" class="object-cover object-center w-full h-full block" src={props.thumbnail}/>
</Link>
<div class="mt-4">
<h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{}</h3>
<h2 class="text-gray-900 title-font text-lg font-medium">{props.title}</h2>
      <p class="my-2"><span className='text-yellow-500'>$</span> {props.price}</p>
    </div>
    <button onClick= {()=>Twofunc()} class="py-2 px-4 bg-yellow-500 text-white font-semibold rounded-xl shadow-md hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
    Add to Cart
    </button>
  </div>
}



