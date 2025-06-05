import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Login from './Components/Login.jsx';
import Navbar from './Components/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </BrowserRouter>
)
