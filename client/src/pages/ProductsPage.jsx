import React from 'react'
import { useAuth } from '../context/authContext'

function ProductsPage() {
  const { user } = useAuth()
  console.log(user)
  console.log();
  return (
    <div>

    </div>
  )
}

export default ProductsPage
