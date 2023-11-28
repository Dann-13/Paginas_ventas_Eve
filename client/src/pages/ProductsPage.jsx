import React, { useEffect } from 'react'
import { useProduct } from '../context/productContext';

function ProductsPage() {
  const { getProducts, products } = useProduct()
  useEffect(() => {
    getProducts();
  }, [])
  return (
    <div>
      {products.map(product => (
        <div key={product._id}>
          {product.title}
        </div>
      )
      )}
    </div>
  )
}

export default ProductsPage
