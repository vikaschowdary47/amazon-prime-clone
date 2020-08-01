import React from 'react'
import Nav from 'react-bootstrap'

export const Navbar = () => {
    return (

        <Navbar bg="dark">
        <Navbar.Brand href="#home">
          <img
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>
    )
}
