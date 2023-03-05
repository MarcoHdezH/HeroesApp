import React from 'react'
import { Navbar } from '../../UI'
import { MarvelPage, DCPage, SearchPage, HeroPage } from '../pages/index';
import { Navigate, Route, Routes } from 'react-router-dom'


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='Marvel' element={<MarvelPage/> }> </Route>
                    <Route path='DC' element={<DCPage /> }></Route>
                    <Route path='Search' element={<SearchPage/> }> </Route>
                    <Route path='Hero' element={<HeroPage/> }> </Route>

                    <Route path='/' element={<Navigate to="./Marvel" />}> </Route>
                </Routes>

            </div>

        </>
    )
}

