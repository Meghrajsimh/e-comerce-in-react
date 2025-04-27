import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { cartAction, cartCountAction, viewAction } from '../store/store';
import { Link } from 'react-router-dom';

export const Product = ({data}) => {

  const dispatch = useDispatch();
  const userId = JSON.parse(sessionStorage.getItem('userInfo'));
  const {isUser} = useSelector( (val)=> val.isLogin)
  const addCart = () => {
     if(!isUser) {

       alert('Please Log In');
     }else {
     
      dispatch(cartAction.addProduct({userId: userId, productId: data.id}));
      dispatch(cartCountAction.cartTotal());

     }
  }
  dispatch(cartCountAction.cartTotal());  
  const viewMore =  () => {
    dispatch(viewAction.viewNo({viewId: data.id}))
  }
  return (
    <div className="productCard">
      <div className="productImg">
        <img src={`${data.images[0]}`} alt="" />
      </div>
      <div className="productContent">
        <h3>{data.title}</h3>
        <p>{data.brand}</p>
        <p>{data.price}$</p>
        <p>{data.rating} <FaStar />
        </p>
        <div className="cardBtn">
          <Link to={"/viewDetail"} className='btn btn-primary' onClick={ viewMore }>View More</Link>
          <button className='btn btn-primary' onClick={ addCart }>Add</button>
        </div>
      </div>
    </div>
  )
}
