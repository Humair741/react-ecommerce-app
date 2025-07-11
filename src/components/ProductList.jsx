import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ShimmerCard from './ShimmerCard';

const ProductList = ({ onAddToCart }) => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      });
  }, [])

  return (
    <div className='p-4'>
      <h2 className='text-xl font-semibold mb-4'> Product List </h2>
      
        {
          loading ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {[...Array(8)].map((_, index) => (
                <ShimmerCard key={index}/>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
          )
          
        }
      </div>  

  )
}

export default ProductList