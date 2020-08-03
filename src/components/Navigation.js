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
            alt="amazon"
          />
        </Navbar.Brand>
        <div style={{marginRight:'20px',marginLeft:'30px',display:'flex',flexDirection:'row-reverse',cursor:'pointer',overflow:'hidden'}}>
          <img src={icon} alt="search" width='25' height='25' style={{padding:'2px'}} onClick={() => setShowForm(!showForm)}/>
          <div className="search__form">
            { showForm ? <Form style={{marginRight:'20px'}}>
        <Form.Control type="text" placeholder="Search" className=" mr-sm-4" />
        </Form> 
        : null}
          
        </div>
          </div>
      </Navbar>
    )
}
