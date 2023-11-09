import React from 'react'
import Nav from './components/Nav'
import Product from "./components/Product"
import "./global.css"
import { BrowserRouter as Router  , Routes , Route} from 'react-router-dom'
import Cart from './components/Cart'
import { ToastContainer  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Update from './components/Update'




const App = () => {
  return (
    <Router>
      <ToastContainer />
       <Nav/>
      <Routes>
          <Route path='/' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/update/:id' element={<Update />}/>
      </Routes>
    </Router>
  )
}

export default App