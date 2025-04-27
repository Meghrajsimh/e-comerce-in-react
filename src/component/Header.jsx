import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRoutesFromChildren, Link, useNavigate } from "react-router-dom";
import { loginAction, productActin } from "../store/store";

export const Header = () => {

  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const { isUser } = useSelector((val) => val.isLogin);
  const { cartNo } = useSelector((val)=> val.cartCount);  
  const [allProduct, setAll] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    (async () => {
      const categorArr = await fetch(
        "https://dummyjson.com/products/categories"
      )
        .then((res) => res.json())
        .catch((e) => console.log(e));
      setCategories(categorArr);

     const allProduct = await fetch("https://dummyjson.com/products?limit=0 ").then( res => res.json()).catch( e => console.log(e));
     setAll(allProduct.products);  
    })();
  }, []);

  const logOut = () => {
    alert("You are Log Out");
    sessionStorage.setItem("isLog", JSON.stringify(0));
    dispatch(loginAction.isLog());
    navigate("/");
  };


  // category wise fillter
  const selectCategory = async(event) => {
    let selectData = ''
    if(event.target.value == "Choose") {
      selectData = await fetch(`https://dummyjson.com/products?limit=100 `).then( res => res.json()).catch( e => console.log(e));
      
    }else {

       selectData = await fetch(`https://dummyjson.com/products/category/${event.target.value}`).then( res => res.json()).catch( e => console.log(e));
    }
    dispatch(productActin.selectCategory(selectData.products))
  }

  // serching product
  const searchItem = (event) => {
    const serchProduct = allProduct.filter( (ele)=> ele.title.toLowerCase().includes(event.target.value.toLowerCase()));
    dispatch(productActin.serachData(serchProduct));
    
  }

  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-secondary">
                Home
              </Link>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Features
              </a>
            </li>
        
          </ul>
          <div className="select-tag" style={{margin: "0 10px"}}>
            <select className="form-select" aria-label="Default select example" onChange={ selectCategory }>
              <option defaultValue >Choose</option>
              {
                categories.map((ele , index) => <option value={`${ele.slug}`} key={index}>{ele.name}</option>)
              }
            </select>
          </div>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
              onInput={ searchItem }
            />
          </form>
          
          <div className="text-end">
            {isUser ? (
              <>
              <div className="logOutBtn">
              <div className="cartBtn">
              <Link to={"/cart"} className="btn btn-primary" style={{margin:"10px"}}>Cart</Link>
              <div className="cartCount">
                {cartNo}
              </div>

              </div>
              <button
                type="button"
                className="btn btn-danger me-2"
                onClick={logOut}
              >
                Log Out
              </button>
              </div>

              </>
            ) : (
              <>
                <button type="button" className="btn btn-outline-light me-2">
                  <Link to="/login" className="text-white text-decoration-none">
                    Login
                  </Link>
                </button>
                <button type="button" className="btn btn-warning">
                  <Link
                    to="/register"
                    className="text-white text-decoration-none"
                  >
                    Sign-up
                  </Link>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
