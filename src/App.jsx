import { useState } from "react"
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"


function App() {

  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount = {cart.length}/>
      <ProductList onAddToCart={handleAddToCart} />
    </div>
  )
}

export default App
