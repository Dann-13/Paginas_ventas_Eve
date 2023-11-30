import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import CarouselSlides from '../components/navigation/CarouselSlides'
import { useProduct } from '../context/productContext'
import { useAuth } from '../context/authContext';
import ProductHeader from '../components/sections/ProductHeader';
function HomePage() {
  const { getProducts, products } = useProduct();
  const isAdmin = useAuth();
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      if (!dataLoaded) {
        await getProducts();
        setDataLoaded(true);
      }
    };

    fetchData();
  }, [dataLoaded, getProducts]);

  if (!dataLoaded) {
    return <div>Cargando...</div>;
  }


  return (
    <div className='text-white '>
      <CarouselSlides />
      <ProductHeader title={'¡Ulimos Platillos!'}/>
      <div className="grid grid-cols-1 p-10 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} isAdmin={isAdmin} />
        ))}
      </div>


    </div>
  )
}

export default HomePage
