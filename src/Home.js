import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    
     <nav>
     <Link to="/">Hyd</Link>
     <Link to="/bng">Bng</Link>
     <Link to="/chen">Chennai</Link>
     <Link to="/pune">Pune</Link>
     <Link to="/mumb">Mumbai</Link>

     </nav>
   <Outlet/>
    </div>
  )
}

export default Home