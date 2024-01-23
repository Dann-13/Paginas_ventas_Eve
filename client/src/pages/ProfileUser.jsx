import React from 'react'
import { useAuth } from '../context/authContext';
function ProfileUser() {
  const { user } = useAuth();
  console.log(user)
  return (
    <div className='pt-52 md:pt-24 px-5 md:px-10 lg:px-32 flex flex-col md:flex-row justify-center gap-3'>
      <div className='flex flex-col justify-center w-full md:w-1/2'>
        <p className='text-3xl text-center'>Bienvenido, {user.username}!</p>
        <p className='pt-2'>
          En este espacio encontrarás la información que ingresaste en tu registro. Esta información
          servirá para generar un recibo cuando hagas un pedido. Puedes realizar un pedido desde la
          página principal o haciendo clic aquí.
        </p>

        <table className='pt-5 w-full table-auto'>
          <thead>
            <tr>
              <th colSpan={2} className='bg-gray-200 text-center py-2'>Información General</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='font-semibold'>N° De documento</td>
              <td>{user.document}</td>
            </tr>
            <tr>
              <td className='font-semibold'>Nombre</td>
              <td>{user.username}</td>
            </tr>
            <tr>
              <td className='font-semibold'>Email</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td className='font-semibold'>Celular</td>
              <td>{user.cell}</td>
            </tr>
            <tr>
              <td className='font-semibold'>City</td>
              <td>{user.city}</td>
            </tr>
            <tr>
              <td className='font-semibold'>Dirección</td>
              <td>{user.address}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='flex justify-center w-full md:w-1/2'>
        <div className='relative mx-3 mt-3 flex h-60 md:h-auto overflow-hidden rounded-xl'>
          <img className='object-cover w-full h-full' src='/hamburguesita.png' alt='product image' />
        </div>
      </div>
    </div>
  )
}

export default ProfileUser;
