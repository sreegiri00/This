import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NavBarr } from './components/HeadSection/NavBarr.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Body } from './components/Body/Body.jsx';
import Index from './index.jsx';
import './main.css'
import { BrowserRouter } from 'react-router-dom';
import Demo from '../src/demo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
    {/* <Demo/> */}
  </StrictMode>
)
