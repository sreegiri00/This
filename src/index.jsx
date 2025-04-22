import React, { useState, createContext, useRef } from 'react'
import { Body } from './components/Body/Body'
import { NavBarr } from './components/HeadSection/NavBarr'
import { Routes, Route } from 'react-router-dom'
import { About } from './pages/About/About'
import { Purchase } from './pages/Purchase/Purchase'
import { Details } from './pages/Details/Details'
import { Provider } from 'react-redux'
import store from './utils/store.js'
import Login from './pages/userdata/login.jsx'
import Registration from './pages/userdata/registration.jsx'
import Footer from './components/FooterSection/Footer.jsx'
import FooterIs from './components/FooterSection/FooterIs.jsx'

export const ThemeContext = createContext()
export default function Index() {
    const [passId, setPassId] = useState();
    const focused = useRef()

    return (
        <>
            <ThemeContext.Provider value={{ passId, setPassId, focused }}>
                <Provider store={store}>
                    <NavBarr />
                    <Routes>
                        <Route path='/' element={<Body />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/addcart' element={<Purchase />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Registration />} />
                        <Route path='/details/:id' element={<Details />} />
                    </Routes>
                    <FooterIs/>
                    {/* <Footer /> */}

                </Provider>
            </ThemeContext.Provider>

        </>
    )
}
