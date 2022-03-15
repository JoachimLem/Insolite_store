import React from 'react';
import './landingPage.css';
import { Columns, Container } from 'react-bulma-components';




const LandingPage = () => {



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
              <span className='insolite'> INSOLITE</span>.
            </p>
            <button className='discover'>
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
              <span>Découvrir</span></button>
          </Columns.Column>


          <Columns.Column className='landing-right'>
            <img src={process.env.PUBLIC_URL + 'assets/images/tasse_basket.png'} alt='tasse basket' />
          </Columns.Column>
        </Columns>

      </Container>

    </div>
  );
};


export default LandingPage;

