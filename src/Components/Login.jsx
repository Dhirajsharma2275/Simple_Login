import {useState} from 'react'
import Navbar from './Navbar'

export default function Login() {
    const[style,SetStyle]=useState({
        height:'88vh',
        width:'100%',
    })
  return (
    <>
        <div style={style} className='flex items-center justify-center'>
            <div className='border p-5 flex justify-center items-center w-1/2'>
                <div className="img h-80 w-1/2 flex justify-center items-center">
                    <img src="" alt="" />
                    <button className='font-bold border p-1 w-40 rounded hover:bg-blue-700 hover:scale-105 transition-all duration-300 hover:shadow-lg shadow-blue-500/30'>Login</button>
                </div>
                <div className="info h-80 w-1/2 flex flex-col jsutify-center items-center">
                    <input className='my-6 font-bold border p-2 rounded' type="text" name="Name" id="Name" placeholder='Enter Your Name' />
                    <input className='my-6 font-bold border p-2 rounded' type="text" name="Email" id="Email" placeholder='Enter Your Email' />
                    <input className='my-6 font-bold border p-2 rounded' type="text" name="Password " id="Password" placeholder='Enter Your Password' />
                    <button className='font-bold border p-1 w-40 rounded hover:bg-blue-700 hover:scale-105 transition-all duration-300 hover:shadow-lg shadow-blue-500/30 '>Submit</button>
                </div>
            </div>
        </div>
    </>
  )
}
