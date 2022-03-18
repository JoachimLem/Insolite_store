import React from 'react';
import './landingPage.css';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';





const LandingPage = () => {



  return (
    <Container className='container_landingPage' fluid>

    {/* Titre Site */}
    <Row>
      <Col className='brand_title'><span>Insolite</span> Store</Col>
    </Row>


    {/* Contenu principal de la Landing Page */}
    <Row className=' h-75'>
      <Col sm={12} lg={6} className=' pl-5 d-flex flex-column justify-content-around align-items-center h-100' >
        <h1 className='landingPage__description_title'>RETROUVEZ LES OBJETS LES PLUS INSOLITE ET ETRANGE DU WEB</h1>
        <p className='landingPage__description_p'>Idées cadeaux pour les amis et la famille. Surprenez vos proches par des produits vraiment <span>INSOLITE !!!</span></p>
        <Button  size='lg' variant='outline-warning'>Découvrir</Button>
      </Col>


      <Col sm={12} lg={6} className='d-flex justify-content-center align-items-center'>
        <Image className='landingPage__description_image' src={process.env.PUBLIC_URL + 'assets/images/tasse_basket.png' }/>
      </Col>
    </Row>


  </Container>

  
  );
};


export default LandingPage;

