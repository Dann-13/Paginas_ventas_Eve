import React from 'react';
import { Link } from 'react-router-dom';
function NotFoundRoute() {
  return (
    <div className='pt-44 md:pt-16'>
      <main className="w-full h-full flex flex-col justify-center items-center bg-[#191919]">

        <div className='flex flex-col absolute top-48'>
          <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
          <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute top-20 left-14">
            Pagina No Encontrada
          </div>
          <button className="mt-5">
            <p
              className="relative inline-block text-sm font-medium text-white group active:text-orange-500 focus:outline-none focus:ring"
            >
              <span
                className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
              ></span>

              <span className="relative block px-8 py-3 bg-brownPrimary border border-current">
                <Link to="/">Regresar</Link>
              </span>
            </p>
          </button>
        </div>
        <div className=''>
          <img src="/ERROR.png" alt=""
            className="object-cover max-w-full h-[600px] md:h-[800px]" />

        </div>

      </main>
    </div>
  );
}

export default NotFoundRoute;