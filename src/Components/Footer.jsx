import React from 'react'
import { Link } from 'react-router'
function Footer() {
  return (
    <div className='h-40 w-full flex justify-center items-center'>
      <div className='h-full w-4/5 p-5 flex justify-around items-center'>
        <div className='w-1/2 flex justify-around items-center flex-col'>
            <Link className='font-bold my-2 text-2xl' to={"https://www.instagram.com/nyamsharma/"}>Instagram</Link>
            <Link className='font-bold my-2 text-2xl' to={"https://www.facebook.com/dhiraj.sharma.623903"}>Facebook</Link>
        </div>
        <div className='h-full w-1/2 p-5 flex flex-col justify-center items-center'>
            <p className='font-bold my-2 text-2xl'>Mr.Dhiraj Sharma</p>
            <p className='font-bold my-2 text-2xl'>Kathmandu,Nepal</p>
            <p className='font-bold my-2 text-2xl'>Front End Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
