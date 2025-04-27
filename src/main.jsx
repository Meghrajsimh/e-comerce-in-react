import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './component/Login.jsx';
import Register from './component/Register.jsx';
import { PorductList } from './component/PorductList.jsx';
import { Provider } from 'react-redux';
import eComerceStore from './store/store.js';
import { Cart } from './component/Cart.jsx';
import ViewProduct from './component/ViewProduct.jsx';
import NexData from './component/NexData.jsx';



const router = createBrowserRouter([{
    path:"/",
    element: <App/>,
    children: [{
        path: "/", element:<PorductList/>
    },
{
    path: "/login", element:<Login/>
}, {
    path:"/register", element:<Register/>
}, {
    path:"/cart", element: <Cart/>
}, {
    path: "/viewDetail", element: <ViewProduct/>
},{
    part:"/newForm", element: <NexData/>
}]
},
{
    path:"/new",
    element: <NexData/>
}]);
createRoot(document.getElementById('root')).render(
    <Provider store={eComerceStore}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>

)
