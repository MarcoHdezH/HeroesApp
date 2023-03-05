import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='Login' element={<LoginPage/> }> </Route>
            <Route path='/*' element={<HeroesRoutes/> }></Route>
        </Routes>
      
    </>
  )
}