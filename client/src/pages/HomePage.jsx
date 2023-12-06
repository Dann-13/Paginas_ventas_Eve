import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import CarouselSlides from '../components/navigation/CarouselSlides'
import { useProduct } from '../context/productContext'
import ProductHeader from '../components/sections/ProductHeader';
import ServicesSlider from '../components/sections/ServicesSlider';
function HomePage() {
  const { getProducts, products } = useProduct();
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
    <div className='bg-[#FBECDA] '>
      <CarouselSlides />
      <ProductHeader title={'¡Lo Nuevo!'}/>
      <div className="grid grid-cols-1 py-5 items-center sm:grid-cols-2 md:grid-cols-3 md:px-20 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <ProductHeader title={"¡Revisa Nuesto Menu!"} />
      <ServicesSlider />

    </div>
  )
}

export default HomePage
