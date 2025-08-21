import { useState } from 'react'
import DisplayAll from './components/DisplayAll'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import NewGuest from './components/NewGuest'
import EditGuest from './components/EditGuest'
import ViewGuest from './components/ViewGuest'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<DisplayAll/>} />
        <Route path='/create' element={<NewGuest/>} />
        <Route path='/edit/:id' element={<EditGuest/>} />
        <Route path='/:id' element={<ViewGuest/>} />
      </Routes>
    </>
  )
}

export default App
