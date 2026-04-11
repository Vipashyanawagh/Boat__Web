import React from 'react'
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import UserForm from './components/UserForm'
import ProductCards from './components/ProductCards'
import BoatWeb from './components/BoatWeb'
import BoatFooter from './components/BoatFooter'
import Cards1Columns from './components/Cards1Columns'
import CardsColumn from './components/CardsColumn'
import BoatCards from './components/BoatCards'
import SaleCards from './components/SaleCards'

import SaleCards2 from './components/SaleCards2'
import TopPicksCards from './components/TopPicksCards'
function App() {
  return (
    <>
   

    <BoatWeb/>
    <BoatCards/>
    <TopPicksCards/>
    <BoatFooter/>
   
    
     {/*  <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm />} />
      </Routes>
    </BrowserRouter>*/}
   
    </>
  )
}

export default App