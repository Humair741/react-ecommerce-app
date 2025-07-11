import React from 'react'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className='bg-white p-4 shadow rounded'>
      <img 
        src={product.image} 
        alt={product.title} 
        className='h-40 w-full object-contain mb-2'
      />
      <h3 className='text-sm font-medium'> {product.title} </h3>
      <p className='text-blue-600 font-bold'> ${product.price} </p>
      <button
        className="bg-blue-600 text-white text-sm py-1 px-3 rounded hover:bg-blue-700 mt-auto"
        onClick={() => onAddToCart(product)} 
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
