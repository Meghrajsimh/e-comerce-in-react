import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { Header } from "./component/header"
import { Outlet } from "react-router-dom"
import NexData from "./component/NexData"


function App() {

  
  return (
    <>
     
     <Header/>
     <div className="main-container">
      <Outlet/>
     </div>
     
    </>
  )
}

export default App
