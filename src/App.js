import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Nav from "./Nav"
import Home from './Home'
import About from './About'
import Login from './Login'
import Hydhome from './Hydhome'
import Bng from './Bng'
import Chennai from './Chennai'
import Pune from './Pune'
import Mumb from './Mumb'
const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='/' element={<Hydhome/>}/>
        <Route path='/bng' element={<Bng/>}/>
         <Route path='/chen' element={<Chennai/>}/>
         <Route path='/mumb' element={<Mumb/>}/>
         <Route path='/pune' element={<Pune/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App