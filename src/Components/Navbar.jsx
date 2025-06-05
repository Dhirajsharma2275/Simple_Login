import { useState } from 'react'


function Navbar() {
    const[Style,SetStyle]=useState({
    backgroundColor: '#111111',
    color: 'White',
    padding: '20px',
    borderBottom:'2px solid white'
    })
  return (
    <>
      <div className='flex font-bold justify-around h-20 items-center' style={Style}>
        <p>NavBar</p>
        <ul className='flex gap-5'>
            <li className='cursor-pointer'><link rel="stylesheet" href="/About" />About</li>
            <li className='cursor-pointer'><a href="/login">Login</a></li>
        </ul>
      </div>
    </>
  )
}
 
export default Navbar
