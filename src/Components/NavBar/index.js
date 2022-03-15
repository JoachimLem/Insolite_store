import React from 'react';
import { Navbar, Form } from 'react-bulma-components';
import './navbar.css';
import 'font-awesome/css/font-awesome.min.css';
//Import Icons
import {BsFillCartFill} from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';



const NavBar = () => (
  <Navbar size='large' fixed='top' className='navbar'>

    {/* Logo Website  */}
    <Navbar.Brand>
      <Navbar.Item href='/home'>
        <p className='brandLogo'>
          <span>INSOLITE</span>STORE
        </p>
      </Navbar.Item>
      <Navbar.Burger />
    </Navbar.Brand>


    {/* Menu */}
    <Navbar.Menu>
      <Navbar.Container align='right'>

        <Navbar.Item href='#' className='navbar_item' is-outlined>
          Nouveautés
        </Navbar.Item>

        <Navbar.Item hoverable>
          <Navbar.Link className='navbar_item'>
            Catégories
          </Navbar.Link>
          <Navbar.Dropdown>
            <Navbar.Item href="#">
              Subitem 1
            </Navbar.Item>
            <Navbar.Item href="#">
              Subitem 2
            </Navbar.Item>
          
          </Navbar.Dropdown>
        </Navbar.Item>

        <Navbar.Item href='#' className='navbar_item'>
          Meilleures Ventes
        </Navbar.Item>

        {/* Search Bar */}
        <Navbar.Item href='#' className='navbar_item'>
          <Form.Field>
            <Form.Control>
              <Form.Input
                rounded
                className='search_icon'
                placeholder="&#xf002; Recherche" 
                type='text'
              />
            </Form.Control>
          </Form.Field>
        </Navbar.Item>

      </Navbar.Container>


      {/* Icons for profil & cart */}
      <Navbar.Container align='right'>
        <Navbar.Item href='#' className='navbar_item'>
          <CgProfile size='1.5em' />
        </Navbar.Item>

        <Navbar.Item href='#' className='navbar_item'>
          <BsFillCartFill size='1.5em' />
        </Navbar.Item>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
);

export default NavBar;