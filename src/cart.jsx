import React from 'react'
import {useCart} from 'react-use-cart'
import './responsive.css'

const Cart = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        } = useCart()
        if(isEmpty) return <h1 className='text-3xl sm:text-4xl  flex-wrap text-center xl:text-5xl lg:text-5xl md:text-5xl font-bold my-36 sm:my-36 md:my-52 lg:my-52 xl:my-52'>Your Cart is Empty Now</h1>
        
        
       
  return (
  
    
          
    <section className='py-20 flex justify-center items-center w-full '>
    <div className='row  w-full px-5 '>
<div className="col-12 ">
    <h5 className='text-center flex-wrap text-2xl font-bold flex justify-center items-center'>Catogery Wise Cart Items <h1 className='text-blue-500'>({totalUniqueItems}) </h1>,Total Cart Items: <h1 className='text-blue-500'>({totalItems})</h1></h5>
    <table className=' w-full my-3 '>
        <tbody className=' ' style={{border:"",boxShadow:"0 10px 10px 10px rgba(0,0,0,0.1)"}}>
           
    {items.map((item,index)=>{
     
        return(
         
      <tr className='main flex justify-between flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row p-4 items-center ' key={index} style={{border:" silver",margin:"10px 0" }}>
      <td className='md:mb-5 sm:mb-5 mb-5 lg:mb-0 xl:mb-0  ' >
        <img className='image rounded-full '  src={item.thumbnail} alt='' style={{height:"9rem", width:"9rem"}} />
      </td>
      <td className='md:mb-5 sm:mb-5 mb-5 lg:mb-0 xl:mb-0 text-2xl font-semibold'>{item.title}</td>
      <td className='md:mb-5 sm:mb-5 mb-5 lg:mb-0 xl:mb-0 text-2xl font-semibold px-10'>${item.price}</td>
      <td className='md:mb-5 sm:mb-5 mb-5 lg:mb-0 xl:mb-0 text-2xl font-semibold'>Quantity <span className='text-blue-500'>({item.quantity})</span> </td>
      <td className='buttons'>
        <button className='btn text-2xl  font-bold bg-red-400 hover:bg-red-700 text-white py-2 px-5 rounded-full m-2' onClick={()=>updateItemQuantity(item.id, item.quantity -1) }>-</button>
        <button className='btn text-2xl  font-bold bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full m-2' onClick={()=> updateItemQuantity(item.id, item.quantity +1) } >+</button>
        <button className='py-3 px-4     bg-red-500 hover:bg-red-700 text-white rounded-full m-2' onClick={()=>removeItem(item.id)}>Remove Item</button>
      </td>
     </tr>
            )
    })
    
}
</tbody>
    </table>
</div>
<div className='col-auto ms-auto mt-10'>
   <h2 className=' text-2xl font-bold flex justify-center items-center'>Total Price: <h1 className='text-blue-500'>${cartTotal}</h1> </h2>
</div>
<div className="flex justify-center items-center">
    <button className='py-2 px-2 sm:py-2 sm:px-2 xl:py-3 xl:px-4 lg:py-3 lg:px-4 md:py-3 md:px-4 text-sm sm:text-sm md:text-1xl lg:text-2xl xl:text-2xl   bg-red-500 hover:bg-red-700 text-white rounded-full m-2 font-semibold' onClick={()=> emptyCart()}>Clear Cart</button>
<button className='py-2 px-2 sm:py-2 sm:px-2 xl:py-3 xl:px-4 lg:py-3 lg:px-4 md:py-3 md:px-4 text-sm sm:text-sm md:text-1xl lg:text-2xl xl:text-2xl bg-blue-500 hover:bg-blue-700 text-white rounded-full m-2  font-semibold'>Buy Now</button>
</div>
    </div>
    </section>
    
    
    )
  }
  
  export default Cart