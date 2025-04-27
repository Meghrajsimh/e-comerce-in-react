import React, { useState , useEffect } from 'react'
import CartList from './CartList';
import { cartCall } from './apiCall';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartCountAction } from '../store/store';

export const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartDatas = JSON.parse(localStorage.getItem("cartData"));
    const userId = JSON.parse(sessionStorage.getItem("userInfo"));
   
    const {cartData} = useSelector((state) => state.cart);

    const [cart, setCart] = useState({ userCart: [], cartQun: [] });
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        let totalCount  = 0;
        let total = 0;
        const fetchUserCart = async () => {
            const fetchedCart = await cartCall(userId, cartDatas); 
            setCart(fetchedCart); 
            fetchedCart.userCart.forEach((ele, index) => {
                 total += ele.price * fetchedCart.cartQun[index];
                 totalCount += Number(fetchedCart.cartQun[index])
            });
            dispatch(cartCountAction.cartTotal());                
            setAmount(total);
        };
        fetchUserCart();
        
    }, [cartData]);  

    
       
   
  return (
    
    <>
      <div className="cart-container">
        <button className='btn btn-primary' onClick={() => navigate("/")}>Home</button>
        <h1>Cart</h1>

        <div className="cart">
            <div className="cartHeader">
                <div className="cartNo">
                    No.
                </div>
                <div className="cardProductName">
                    Product Name
                </div>
                <div className="productImg">
                    Product Img
                </div>
                <div className="productQunty">
                    Quantity
                </div>

                <div className="productPrice">
                    Price
                </div>
                <div className="productPrices">
                    Total Price
                </div>
            </div>
            <div className="cardContent">
            {
                    cart.userCart.length > 0 ? (
                        cart.userCart.map((item, index) => {
                            return <CartList key={index} data={item} no={index + 1} Qn={cart.cartQun[index]} id={userId}/>;
                        })
                    ) : (
                        <p>No items in your cart.</p> 
                    )
                }
            </div>
        </div>
        <div className="totalAmount">
            <h1>Total Amount: {Math.round( Number(amount))} $ </h1>
        </div>
      </div>
    </>
  )
}
