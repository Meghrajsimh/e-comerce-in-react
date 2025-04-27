import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "./Product";
import { productActin } from "../store/store";

export const PorductList = () => {
 
  const { productDatas } = useSelector( val => val.product)
  const dispatch = useDispatch();
  

  useEffect(() => {
    (async () => {
      const productData = await fetch("https://dummyjson.com/products?limit=100")
        .then((res) => res.json())
        .catch((e) => console.log(e));
        dispatch(productActin.products(productData.products))
  
    })();
  }, []);
  console.log(productDatas.length);
  return (
    <div className="productList">
      {  productDatas.length > 0 ? (
         productDatas.map((ele) => {
          return <Product key={ele.id} data={ele} />;
        })
      ) : (
        
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      )}
    </div>
  );
};
