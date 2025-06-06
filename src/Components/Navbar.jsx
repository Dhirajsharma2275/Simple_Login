import { useState } from 'react'
import { Link } from 'react-router-dom';
function Navbar(props) {
    const[Style,SetStyle]=useState({
    backgroundColor: '#111111',
    color: 'White',
    padding: '20px',
    borderBottom:'2px solid white'
    })
  return (
    <>
      <div className='flex font-bold justify-around h-20 items-center' style={Style}>
        <p>Mr. Coder</p>
        <ul className='flex gap-5'>
            <li className='cursor-pointer'><Link to='/login'>Login</Link></li>
        </ul>
      </div>
    </>
  )
}
 
export default Navbar
