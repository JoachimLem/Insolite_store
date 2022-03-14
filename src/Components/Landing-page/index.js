import React, { useState, useEffect } from 'react';
import './landingPage.css';
import axios from 'axios';
import { Button, Columns, Container } from 'react-bulma-components';




const LandingPage = () => {

  //test stapi

  // const [test, setTest] = useState([]);


  // const addTest = async () => {

  //   await axios.get("http://localhost:1337/api/products?populate=*").then(response => {
  //     setTest(response.data.data);
  //   });

  // };


  // useEffect(() => {
  //   addTest();
  // }, []);


  return (
    <div className='content landingPage'>
      <Container className='landingPage-container'>

        <h1 className='title mb-6'>
          <span>INSOLITE </span>STORE
        </h1>

        <Columns>
          <Columns.Column className='landing-left'>
            <h2 className='has-text-centered is-size-1'>
              RETROUVEZ LES OBJETS LES PLUS INSOLITE ET ETRANGE DU WEB
            </h2>
            <p className='has-text-justify is-size-4'> Idées cadeaux pour les amis et la famille.
              Surprenez vos proches par des produits vraiment
              <span className='insolite'> INSOLITE.</span>
            </p>
            <button className='discover'>
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
              <span>Découvrir</span></button>
          </Columns.Column>


          <Columns.Column className='landing-right'>
            <img src={process.env.PUBLIC_URL + 'assets/images/tasse_basket.png'} alt='tasse basket' />
          </Columns.Column>
        </Columns>

      </Container>


      {/* {test.map((product) => (


        <div key={product.id}>
          <h1>{product.attributes.name}</h1>
          <p>{product.attributes.description}</p>
          <p><span>€{product.attributes.price}</span><span>quantité {product.attributes.quantity}</span></p>
          <img src={product.attributes.photo.data[0].attributes.url} alt={product.name} />
        </div>  
  
      ))} */}



    </div>
  );
};


export default LandingPage;

