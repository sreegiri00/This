import React from 'react'
import { Body } from './components/Body/Body'
import { NavBarr } from './components/HeadSection/NavBarr'
import { Routes, Route } from 'react-router-dom'
import { About } from './pages/About/About'
import { Purchase } from './pages/Purchase/Purchase'
import { Details } from './pages/Details/Details'


export default function Index() {
    return (
        <>
            <NavBarr />
            <Routes>
                <Route path='/' element={<Body/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/purchase' element={<Purchase/>} />
                <Route path='/details' element={<Details/>} />
            </Routes>
        </>
    )
}
