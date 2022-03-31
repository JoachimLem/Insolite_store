import React from 'react';
import './home.css';
import Navbar from '../NavBar';
import { Container, Block, Card, Media, Heading, Content, Button, Columns } from 'react-bulma-components';
import CardProduct from '../CardProduct';


const HomePage = () => (

  <div className=' content homePage'>
    <Navbar />
    <Block className='homePage_title'>
      <p>Bienvenue chez vous, retrouvez les produits du moment qui font le buzz sur internet.</p>
    </Block>



    <Container className='homePage_container'>
    <CardProduct />

    </Container>

  </div>
);

export default HomePage;