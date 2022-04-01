import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './navbar.css';
import 'font-awesome/css/font-awesome.min.css';
//Import Icons
import { BsFillCartFill, BsPersonCircle } from 'react-icons/bs';
import { Navbar, Nav, Dropdown, Button } from 'react-bootstrap';
import LogIn from '../Compte/LogIn';
import { useCookies } from 'react-cookie';




const NavBar = () => {

  const [category, setCategory] = useState([]);

  const [show, setShow] = useState(false);

  const [cookies, setCookies] = useCookies(['name']);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClose = () => {
    setShow(false);
  }

  const handleShow = () => {
    console.log(show)
    setShow(true);
  }

  useEffect(() => {
    if (cookies.name!==undefined){
      setIsLoggedIn(true)
    }
  },[cookies.name]);

  useEffect(() => {
    axios.get(`http://${process.env.REACT_APP_API_CATEGORY}`)
      .then((response) => {
        setCategory(response.data.data);
        console.log(category);
      });
  },[cookies]);

  return (

    <Navbar bg='dark' variant='dark' fixed='top' collapseOnSelect expand="sm">

      <Navbar.Brand as={Link} to="/home">Insolite Store</Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="flex-end" >


        <Nav fill className="flex-grow-1">
          <Nav.Link as={Link} to="/nouveauarticle">Nouveautés</Nav.Link>
          <Nav.Link as={Link} to="/top10">Top10 </Nav.Link>

          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link}>Catégories</Dropdown.Toggle>
            <Dropdown.Menu variant='dark' >

              {category.map((category) => (
                <Dropdown.Item
                  key={category.id}
                  as={Link}
                  to={category.attributes.name.toLowerCase()}
                >
                  {category.attributes.name}
                </Dropdown.Item>

              ))}

            </Dropdown.Menu>
          </Dropdown>
        </Nav>

        {/* Link for profil & cart page */}
        <Nav fill >
          { isLoggedIn === true ?
            
              <Nav.Link as="span" style={{ "backgroundColor":"red", "borderRadius":"50%", "width":"32px", "height":"32px"}}>
                {cookies.name}
              </Nav.Link>

       :

          <Nav.Link as={Button}  onClick={handleShow} variant='inherit' to='/moncompte'>

            {window.innerWidth > 575 ?
              <BsPersonCircle size='2rem' color='#fff' /> :
              'Mon Compte'}
          </Nav.Link>
            

          }



          <Nav.Link as={Link} to='/panier' href="#features">
            {window.innerWidth > 575 ?
              <BsFillCartFill size='2rem' color='#fff' /> :
              'Mon Panier'
            }
          </Nav.Link>
        </Nav>

      </Navbar.Collapse>

      <LogIn
        show={show}
        handleClose={handleClose} 
        />
    </Navbar>


  );
};

export default NavBar;



