import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { viewCall } from './apiCall';
import { useNavigate } from 'react-router-dom';
import { cartAction , cartCountAction } from '../store/store';

function ViewProduct() {
    const dispatch = useDispatch();
    const [cart, setCart] = useState({});
    const navigate = useNavigate();
    const {isUser} = useSelector( (val)=> val.isLogin)
    const {viewId} = useSelector( (val)=> val.view);

  const userId = JSON.parse(sessionStorage.getItem('userInfo'));
  const addCart = () => {
     if(!isUser) {

       alert('Please Log In');
     }else { 
      dispatch(cartAction.addProduct({ userId: userId, productId: cart.id}));
      dispatch(cartCountAction.cartTotal());
     }
  }

    useEffect(() => {
       
        const fetchUserCart = async () => {
             const fetchedCart = await viewCall(viewId) // fetch the cart data
            setCart(fetchedCart); 
                    
        };
        fetchUserCart();
        
    }, [viewId]);  
    
  return (
    <>
     <button className='btn btn-primary' onClick={() => navigate("/")}>Home</button>
       <div className="productViewCard">
      <div className="produtImg">
        <img src={`${cart.images}`} alt="" />
      </div>
      <h3>{cart.title}</h3>
      <p>{cart.brand}</p>
      <p>{cart.description}</p>
      <p>{cart.price}</p>
      <p>{cart.rating}</p>
      <button className='btn btn-primary' onClick={ addCart }>Add</button>
    </div>
    </>
  )
}

export default ViewProduct