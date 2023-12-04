import React from 'react'

function ProductHeader({title}) {
  return (
    <div>
        <div className='py-5'>
          <div className='flex justify-center items-center flex-col md:flex-row'>       
            <h2 className='p-4 text-4xl text-primary font-veneer text-center tracking-wide'>{title}</h2>
          </div>
        </div>
      
    </div>
  )
}

export default ProductHeader
