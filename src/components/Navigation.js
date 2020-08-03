import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import logo from '../images/prime.svg'
import icon from '../images/search.png'

export const Navigation = () => {
  const [showForm,setShowForm] = React.useState(false);

    return (

        <Navbar sticky="top" style={{backgroundColor:"#1a242f",width:"100%"}} className="justify-content-between">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="80"
            height="35"
            className="d-inline-block align-top ml-15"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <div style={{marginRight:'20px',display:'flex',flexDirection:'row-reverse'}}>
          <img src={icon} width='30' height='30'/>
          <div className="search__form">
          <Form inline>
        <Form.Control type="text" placeholder="Search" className=" mr-sm-5" />
        </Form>
        </div>
          </div>
      </Navbar>
    )
}
