import React from 'react';

import './navbar.css';
import 'font-awesome/css/font-awesome.min.css';
//Import Icons
import { BsSearch } from 'react-icons/bs';


import {Navbar,Nav, Container, Dropdown, Form, InputGroup} from 'react-bootstrap';



const NavBar = () => (
  <div>

  
<Navbar bg='dark' fixed='top'>
<Container>
      <Navbar.Brand href="/home">Brand link</Navbar.Brand>
      
      <Nav className="nav-fill">
      <Nav.Link href="#home">Nouveautées</Nav.Link>
      <Nav.Link href="#features">Meilleures Ventes</Nav.Link>
    
      <Dropdown as={Nav.Item}>
  <Dropdown.Toggle as={Nav.Link}>Catégories</Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item>Categorie 1</Dropdown.Item>
    <Dropdown.Item>Catégorie 2!</Dropdown.Item>
    <Dropdown.Item>Catégorie 3!</Dropdown.Item>
    <Dropdown.Item> Catégorie 4!</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<InputGroup className='p-2 ml-2'>
    <InputGroup.Text >
      <BsSearch />
    </InputGroup.Text>
    <Form.Control
      placeholder='Recherche ...'
    />
  </InputGroup>


    </Nav>
    </Container>
</Navbar>

  </div>
);

export default NavBar;



