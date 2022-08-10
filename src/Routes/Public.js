import React from 'react'
import Home from '../Pages/Home'
import Formulario from '../Pages/Formulario'
import Detalle from '../Pages/Detalle'
import Login from '../Pages/Login'
import AuthContext from "../Context/AuthContext";
import{
  Routes,
  Route
}from "react-router-dom"
function Public() {
  return(
    <>
    <AuthContext.Consumer>{
      context=>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/producto/:id' element={<Detalle />} />
        {!context.userLogin &&
                <>
                <Route path='/formulario' element={<Formulario />} />
                 <Route path='/login' element={<Login/>}/>
                </>
                }
              
      </Routes>

      }
      
      </AuthContext.Consumer>
      </>
  )
}

export default Public;