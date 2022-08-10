import React from "react";
import {Link} from "react-router-dom"
import {Navbar,Nav} from 'react-bootstrap'
import AuthContext from "../Context/AuthContext";
function Menu(){
    return(
        <>
        <AuthContext.Consumer>
          {
            context=>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                
                {!context.userLogin &&
                <>
                <Nav.Link as={Link} to="/formulario">Registrarse</Nav.Link>
                <Nav.Link as={Link} to="/login">Ingresar Usuario</Nav.Link>
                </>
                }
                {context.userLogin&&
                <>
                <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>
                </>
                }
              </Nav>
            </Navbar.Collapse>
        </Navbar>
          }
     
</AuthContext.Consumer>
        </>
    )
}
export default Menu;