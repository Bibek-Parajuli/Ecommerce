import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Navbar } from './components/utility.tsx'
import { Login, SignUp } from './components/Auth.tsx'
import { Contact } from './components/Contact.tsx'
import About from './components/About.tsx'
import Home from './components/Home.tsx'
import Products from './components/Products.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
