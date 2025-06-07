import { useState } from 'react'
import './App.css'
import Projects from './Components/Projects';
import { Link } from 'react-router-dom';
import Card from './Components/Card';
import Navbar from './Components/Navbar'
import picture from './Components/Img/picture.png'
import Footer from './Components/Footer';

function App() {
  const[Style,SetStyle]=useState({
    backgroundColor: '#111111',
    color: 'black',
    padding: '20px',
  })

  return (
    <>
     <div className="body bg-red-500 h-155 flex" style={Style}>
        <div className='flex justify-center items-center h-full w-1/2'>
          <img src={picture} alt="" />
        </div>
        <div className="texts text-white h-full w-1/2 flex flex-col justify-center items-center">
          <p className='text-m font-semibold tracking-wide'>Hey!</p>
          <p className='text-2xl my-3 font-semibold tracking-wide'>Its_Me Dhiraj Sharma</p>
          <p className='text-5xl my-3 font-semibold tracking-wide'>Front-End Developer</p>
          <div className="button">
          <button className='m-8 border p-3 w-50 rounded-sm hover:bg-blue-700 hover:scale-105 transition-all duration-300 hover:shadow-lg shadow-blue-500/30'>Hire Me!</button>
          <button className='m-8 border p-3 w-50 rounded-sm hover:bg-blue-700 hover:scale-105 transition-all duration-300 hover:shadow-lg shadow-blue-500/30'>Contact Us</button>
          </div>
        </div>
     </div>
     <Card/>
     <Projects/>
     <Footer/>
    </>
  )
}

export default App
 
