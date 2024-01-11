import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductHeader from '../../components/sections/ProductHeader';
import { useProduct } from '../../context/productContext';
import ProductDetails from '../../components/productDetailsAdmin/ProductDetails';

function ProductsPage() {
  const {getProducts, products} = useProduct();
  const [dataLoaded, setDataLoaded] = useState();
  useEffect(() => {
      const fetchData = async () => {
          if(!dataLoaded){
              await getProducts();
              setDataLoaded(true);
          }
      };
      fetchData();
      
  },[dataLoaded, getProducts]);
  if (!dataLoaded){
      return <div>Cargando Productos</div>
  }
  return (
    <div className='pt-40 lg:pt-24'>
      <ProductHeader title={"¡Adminstra Los Productos!"} />
      <div className='flex justify-end pr-10'>
          <Link className='rounded-lg py-2 px-3 bg-[#F5EBD4] font-veneer leading-5 text-lg' to={'/add-product'}>Añadir Productos</Link>
      </div>
      <div className="grid grid-cols-1 py-5 px-2 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:px-20">
        {products.map((product) => (
          <ProductDetails key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
