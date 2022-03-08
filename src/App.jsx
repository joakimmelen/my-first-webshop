import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Campaigns from './pages/Campaigns'
import NewProducts from './pages/NewProducts'
import Products from './pages/Products'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
            <Link to="/"> Campaigns </Link>
            <Link to="/newproducts"> New Products </Link>
            <Link to="/products"> Products </Link>
            <Link to="/contact"> Contact us </Link>
            <Link to="/cart"> See cart </Link>
          </nav>
          <Routes>
            <Route path="/" element={<Campaigns />} />
            <Route path="/newproducts" element={<NewProducts />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App
