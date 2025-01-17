import React, { useState, createContext } from 'react'
import { Body } from './components/Body/Body'
import { NavBarr } from './components/HeadSection/NavBarr'
import { Routes, Route } from 'react-router-dom'
import { About } from './pages/About/About'
import { Purchase } from './pages/Purchase/Purchase'
import { Details } from './pages/Details/Details'

export const ThemeContext = createContext()
export default function Index() {
    const [passId, setPassId] = useState();

    return (
        <>
            <ThemeContext.Provider value={{ passId, setPassId }}>
                <NavBarr />

                <Routes>
                    <Route path='/' element={<Body />} />
                    {/* <Route path='/' element={<Details />} /> */}
                    <Route path='/about' element={<About />} />
                    <Route path='/purchase' element={<Purchase />} />
                    <Route path='/details/:pa' element={<Details />} />
                </Routes>
            </ThemeContext.Provider>

        </>
    )
}
