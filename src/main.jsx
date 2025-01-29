import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NavBarr } from './components/HeadSection/NavBarr.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import Index from './index.jsx';
import './main.css'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <>
  <StrictMode>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </StrictMode>
  </>
)
