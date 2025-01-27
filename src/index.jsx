import React, { useState, createContext } from 'react'
import { Body } from './components/Body/Body'
import { NavBarr } from './components/HeadSection/NavBarr'
import { Routes, Route } from 'react-router-dom'
import { About } from './pages/About/About'
import { Purchase } from './pages/Purchase/Purchase'
import { Details } from './pages/Details/Details'
import { Provider } from 'react-redux'
import store from './utils/store.js'

export const ThemeContext = createContext()
export default function Index() {
    const [passId, setPassId] = useState();

    return (
        <>
            <ThemeContext.Provider value={{ passId, setPassId }}>
                <Provider store={store}>
                <NavBarr />
                <Routes>
                    {/* <Route path='/' element={<Details />} /> */}
                    <Route path='/' element={<Body />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/addcart' element={<Purchase />} />
                    <Route path='/details/:id' element={<Details />} />
                </Routes>
                </Provider>
            </ThemeContext.Provider>

        </>
    )
}
