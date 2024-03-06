import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../Store/cardSlice';


function Card() {

  const dispatch = useDispatch();

  const product = useSelector((state) => state.card)

  const handleRemove = (productId) => {
    dispatch(remove(productId))
  };

  return (
    <>
      <h5>Cart Items</h5>
      <div className='productWrapper'>
        {product.map((product) => (
          <div className='cart'>
            <img src={product.image} alt='' />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button onClick={() => handleRemove(product.id)} className='btn'>Remove</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Card
