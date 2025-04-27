export const cartCall =  (id, data) => {
    
    return new Promise(async (resolve, reject) => {
        let userCart = [];
        let cartQun = []
        try {
            const allProduct = await fetch("https://dummyjson.com/products?limit=0 ")
                .then(res => res.json())
                .then(res => res.products);
            
            data.forEach((ele) => {
                if (ele.userId === id) {
                    allProduct.forEach((item) => {
                        if (item.id === ele.productId) {
                            userCart.push(item);
                            cartQun.push(ele.item)
                        }
                    });
                }
            });

            resolve({userCart, cartQun}); // resolve the promise with the populated userCart
        } catch (e) {
            reject(e); // handle errors
        }
//    return userCart
}) }

export const viewCall = (id) => {
    
    return new Promise(async (resolve, reject) => {
        
        try {
            const allProduct = await fetch("https://dummyjson.com/products?limit=0 ")
                .then(res => res.json())
                .then(res => res.products);
           
            const data = allProduct.filter((ele) => {
                
                if(ele.id == id) {
                    
                    return ele;
                }
                })
            
            resolve(data[0]); // resolve the promise with the populated userCart
        } catch (e) {
            reject(e); // handle errors
        }
    })
}