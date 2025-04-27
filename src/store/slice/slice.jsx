import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    registerData: JSON.parse(localStorage.getItem('userRegisterData')) || [],
  },
  reducers: {
    register: (state, action) => {
    
      if(state.registerData.length === 0) {
        state.registerData = [...state.registerData, action.payload];
        localStorage.setItem(
          "userRegisterData",
          JSON.stringify(state.registerData)
        );

      }else {
        const user = state.registerData.some(
          (ele) => action.payload.email === ele.email
        )

        if(user) {
          alert("Email already exists");
        }else {
          state.registerData.push(action.payload);
          localStorage.setItem(
            "userRegisterData",
            JSON.stringify(state.registerData)
          );
        }
      }

    },
  },
});

export const loginSlice = createSlice({
  name: "checkUser",
  initialState: {
    isUser: Number(sessionStorage.getItem("isLog")) || 0,
  },
  reducers: {
    isLog: (state, action) => {
      state.isUser = Number(sessionStorage.getItem("isLog"));
    },
  },
});

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productDatas: [],
  },
  reducers: {
    products:  (state, action) => { 
      console.log(action);
       state.productDatas = action.payload ;
    },
    selectCategory : (state, action) => {
        state.productDatas = action.payload ;
    },
    serachData: (state, action) => {
        // console.log(action.payload);
        state.productDatas = action.payload ;
    }
  }
});

export const cartSlice = createSlice({
  name:"cart",
  initialState: {
    cartData : JSON.parse(localStorage.getItem("cartData")) || []
  },
  reducers : {
    addProduct: (state, action) => {
      const newProduct = {
        userId: action.payload.userId,
        productId: action.payload.productId,
        item: 1 
      }


      if(state.cartData.length === 0) {
        state.cartData = [newProduct];
       
        localStorage.setItem("cartData", JSON.stringify(state.cartData));
      }else {
        
        const isUser =  state.cartData.some(
          (items) => items.userId === newProduct.userId && items.productId === newProduct.productId
        );
        if(isUser) {
          
              const addData = state.cartData.map((ele) => {
                if(ele.productId === newProduct.productId && ele.userId === newProduct.userId) {
                  ele.item += 1;
                }
                return ele;
              });
              localStorage.setItem("cartData", JSON.stringify(addData));
            
          


        }else {
          state.cartData.push(newProduct);
          localStorage.setItem("cartData", JSON.stringify(state.cartData));
          
        }
      }
     
    },
    removeItem: (state, action) => {
    
      state.cartData.forEach((ele, i) => {
        if(ele.productId === action.payload.productId && ele.userId === action.payload.userId) {
          if( state.cartData[i].item > 1) {
            state.cartData[i].item -= 1
          }else {
            state.cartData.splice(i, 1)
          }
        }
      })

      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    },
    addItem: (state, action) => {
      state.cartData.forEach((ele, i) => {
        if(ele.productId === action.payload.productId && ele.userId === action.payload.userId) {
          
            state.cartData[i].item += 1
       
        }
      });
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    }
  }
})


export const viewSlice = createSlice({
  name: "view",
  initialState: {
    viewId : 0
  },
  reducers : {
    viewNo: (state, action) => {
      state.viewId = action.payload.viewId;
    }
  }
})

export const cartCountSlice = createSlice({
  name: "cartCount",
  initialState: {
     cartNo : 0,
  },
  reducers : {
    cartTotal : (state, action) => {
      state.cartNo = 0;
      const cartDatas = JSON.parse(localStorage.getItem("cartData"));
      const userId = JSON.parse(sessionStorage.getItem("userInfo"));
      console.log(cartDatas);
      if(cartDatas !== null) {

        cartDatas.forEach((ele) => {
           if(userId == ele.userId) {
              state.cartNo += ele.item;
           }
  
       })
      }
    }
  }
});


