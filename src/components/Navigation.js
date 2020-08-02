import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../images/prime.svg'

export const Navigation = () => {
    return (

        <Navbar sticky="top" style={{backgroundColor:"#1a242f",width:"100%"}}>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="80"
            height="35"
            className="d-inline-block align-top ml-15"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>
    )
}
