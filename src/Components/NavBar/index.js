import React from 'react';

import './navbar.css';
import 'font-awesome/css/font-awesome.min.css';
//Import Icons
import { BsSearch, BsFillCartFill, BsPersonCircle } from 'react-icons/bs';


import { Navbar, Nav, Container, Dropdown, Form, InputGroup } from 'react-bootstrap';



const NavBar = () => (
  <div>


    <Navbar  bg='dark' variant='dark' fixed='top' collapseOnSelect expand="sm">
      <Container>
        <Navbar.Brand href="/home">Insolite Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-between'>
        <Nav fill>
          <Nav.Link href="#home">Nouveautés</Nav.Link>
          <Nav.Link href="#features">Top10 </Nav.Link>

          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link}>Catégories</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Categorie 1</Dropdown.Item>
              <Dropdown.Item>Catégorie 2!</Dropdown.Item>
              <Dropdown.Item>Catégorie 3!</Dropdown.Item>
              <Dropdown.Item> Catégorie 4!</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <InputGroup className='p-2' size='sm'>
            <InputGroup.Text >
              <BsSearch />
            </InputGroup.Text>
            <Form.Control
              placeholder='Recherche ...'
            />
          </InputGroup>
        </Nav>


        {/* Link for profil & cart page */}
        <Nav >
          <Nav.Link>
            
            {window.innerWidth > 575 ?
            <BsPersonCircle size='2rem' color='#fff' /> :
            'Mon Compte' }
          </Nav.Link>
            
           

          <Nav.Link href="#features">
            {window.innerWidth >575 ?
            <BsFillCartFill size='2rem' color='#fff' /> :
            'Mon Panier'
            }
          </Nav.Link>
        </Nav>
 </Navbar.Collapse>


      </Container>
    </Navbar>
  </div>
);

export default NavBar;



