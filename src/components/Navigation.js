import React,{useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import logo from '../images/prime.svg'
import icon from '../images/search.png'
import {Link} from 'react-router-dom'


export const Navigation = ({searchBar}) => {
  const [showForm,setShowForm] = useState(false);
  const [search,setSearch] = useState('');

  

  const onSubmit = e => 
  {
    e.preventDefault();
  }


    return (
      <>
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
        
        {searchBar &&
        <div style={{marginRight:'20px',marginLeft:'30px',display:'flex',flexDirection:'row-reverse',cursor:'pointer',overflow:'hidden'}}>
          <img src={icon} alt="search" width='25' height='25' style={{padding:'2px',overflowX:'none'}} onClick={() => setShowForm(!showForm)}/>
          <div className="search__form">
            { showForm ?  <Form inline style={{marginRight:'20px'}} onSubmit={onSubmit}>
              <Form.Row>
                <Col>
         <Form.Control type="text" placeholder="Search" className=" mr-sm-5" value={search} onChange={(e) => {setSearch(e.target.value)}}/></Col>
         <Link to={`/search/?q=${search}`}>
           <Col>
        <Button style={{width:'100px'}} variant="outline-success">Search</Button>
        </Col>
        </Link>
        </Form.Row>
        </Form> 
        : null}
        </div>

          </div>
          
         }
         
      </Navbar>
      </>
    )
}
