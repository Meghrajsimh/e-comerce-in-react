import React from 'react'
import { useDispatch } from 'react-redux';
import { cartAction } from '../store/store';
import { useNavigate } from 'react-router-dom';

function CartList({data , no, Qn , id}) {
  const price =Math.round( Qn * Number(data.price));
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const removeItem = () => {
    dispatch(cartAction.removeItem({productId:data.id , userId: id }));
    navigate('/cart');
  }
  const addItem = () => {
   dispatch(cartAction.addItem({productId:data.id , userId: id }));
   navigate('/cart');
  }
  return (
    <div className="cartHeader">
    <div className="cartNo">
       {no}
    </div>
    <div className="cardProductName">
       {data.title}
    </div>
    <div className="productImg">
    <img src={`${data.images[0]}`} alt="" />
    </div>
    <div className="productQunty">
        <button className='btn btn-primary' style={{margin:"0px 10px "}} onClick={addItem}>+</button>
        {Qn}
        <button className='btn btn-primary'  style={{margin:"0px 10px "}} onClick={removeItem}>-</button>
    </div>
    <div className='productPrices'>
      {
       Math.round( data.price)
      } $
    </div>
    <div className="productPrice">
       {price} $
    </div>
</div>
  )
}

export default CartList