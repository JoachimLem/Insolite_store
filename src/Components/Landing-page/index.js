import React from 'react';
import './landingPage.css';




const LandingPage = () => {

  return (
    <div className='block landingPage_container'>

      <h1 className='title'>
        <span>INSOLITE </span>STORE
      </h1>
      <div className='landingPage'>

        <div className='landingPage_left'>
          <h2 className='sub-title'>
            RETROUVEZ LES OBJETS LES PLUS INSOLITE ET ETRANGE DU WEB
          </h2>
          <p> Idées cadeaux pour les amis et la famille.
            Surprenez vos proches par des produits vraiment 
            <span className='insolite'> INSOLITE.</span>
          </p>
          <button className='button-discover'>Découvrir</button>
        </div>

        <div className='landingPage-right'>
        <img src={process.env.PUBLIC_URL + 'assets/images/tasse_basket.png'} alt='tasse basket' />
        </div>

      </div>


    </div>
  );
};


export default LandingPage;

