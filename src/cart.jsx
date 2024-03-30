import React from 'react'
import {useCart} from 'react-use-cart'


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
        if(isEmpty) return <h1 className='text-center text-5xl font-bold my-52'>Your Cart is Empty Now</h1>
        
        
       
  return (
          
    <section className='py-4 flex justify-center items-center w-full'>
    <div className='row justify-content-center '>
<div className="col-12 ">
    <h5 className='text-2xl font-bold flex justify-center items-center'>Catogery Wise Cart Items <h1 className='text-blue-500'>({totalUniqueItems}) </h1>,Total Cart Items: <h1 className='text-blue-500'>({totalItems})</h1></h5>
    <table className='table table-light table-hower w-full my-3'>
        <tbody className=' ' style={{border:"",boxShadow:"0 10px 10px 10px rgba(0,0,0,0.1)"}}>
           
    {items.map((item,index)=>{
     
        return(
         
      <tr className=' ' key={index} style={{border:" 0.5px solid silver",margin:"10px 0" }}>
      <td className='flex justify-between  py-7 w-96 ' >
        <img className='rounded-full' src={item.thumbnail} alt='' style={{height:"9rem", width:"9rem"}} />
      </td>
      <td className='text-2xl font-semibold'>{item.title}</td>
      <td className='text-2xl font-semibold px-10'>${item.price}</td>
      <td className='text-2xl font-semibold'>Quantity <span className='text-blue-500'>({item.quantity})</span> </td>
      <td>
        <button className=' text-2xl  font-bold bg-red-400 hover:bg-red-700 text-white py-2 px-5 rounded-full m-2' onClick={()=>updateItemQuantity(item.id, item.quantity -1) }>-</button>
        <button className='text-2xl  font-bold bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full m-2' onClick={()=> updateItemQuantity(item.id, item.quantity +1) } >+</button>
        <button className='bg-red-500 hover:bg-red-700 text-white py-3 px-4 rounded-full m-2' onClick={()=>removeItem(item.id)}>Remove Item</button>
      </td>
     </tr>
            )
    })
    
}
</tbody>
    </table>
</div>
<div className='col-auto ms-auto'>
   <h2 className=' text-2xl font-bold flex justify-center items-center'>Total Price: <h1 className='text-blue-500'>${cartTotal}</h1> </h2>
</div>
<div className="flex justify-center items-center">
    <button className='bg-red-500 hover:bg-red-700 text-white py-4 px-8 rounded-full m-2 text-2xl font-semibold' onClick={()=> emptyCart()}>Clear Cart</button>
<button className='bg-blue-500 hover:bg-blue-700 text-white py-4 px-8 rounded-full m-2 text-2xl font-semibold'>Buy Now</button>
</div>
    </div>
    </section>
    
    )
  }
  
  export default Cart