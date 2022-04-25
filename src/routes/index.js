import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import InitialPage from '../pages/InitialPage'
import SecondPage from '../pages/SecondPage'

const routes = () => (
  <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<InitialPage />} />
        <Route path='/secondpage' element={<SecondPage />} />
      </Routes>
    </div>
  </Router>
)

export default (routes)
