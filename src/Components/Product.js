import React, { useEffect, useState } from 'react'
import {add} from '../Store/cardSlice';
import {useDispatch} from 'react-redux';
import {fetchProducts} from '../Store/productSlice'
function Product() {
    const [products,setProducts] = useState([]);
    
    const dispatch= useDispatch();
   
   useEffect(()=>{
    const fetchpProduct=async()=>{
         const res = await fetch("https://fakestoreapi.com/products")
         const data = await res.json();
         console.log(data);
         setProducts(data)
    }   
    fetchpProduct();     
   },[])

   const handleAdd=(product)=>{
    
      dispatch(add(product));

   }

  return (
    <>
      <div className='productWrapper'>
      {products.map((product)=>( 
        <div className='cart' key={product.id}>
        <img src={product.image} alt=" " />
        <h4>{product.title}</h4>
        <h5>{product.price}</h5>
        <button className='btn' onClick={()=>handleAdd(product)} >Add to Cart</button>
        </div>
      ))
      }
      </div>
    </>
  )
}

export default Product
