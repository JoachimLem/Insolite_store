import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, InputGroup, FormControl, Form, Row, Col } from 'react-bootstrap';


const LogIn = ( props ) => {
 

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} centered >

        <Modal.Header closeButton>
          <Modal.Title>Connexion</Modal.Title>
        </Modal.Header>


        <Modal.Body>
          <Row className="mb-3">
            <Col className="text-center">
          Connectez vous pour accéder à tous nos services et pouvoir passer commande auprès de nous.
            </Col>
          </Row>



          <Form.Label htmlFor="email">Email : </Form.Label>
          <InputGroup className="mb-3">

            <FormControl id="email" aria-describedby="basic-addon3" type="email" />
          </InputGroup>



          <Form.Label htmlFor="password">Mot de passe : </Form.Label>
          <InputGroup className="mb-3">

            <FormControl id="password" aria-describedby="basic-addon3" type="password" />
          </InputGroup>


          <InputGroup className="mb-3 justify-content-center">
            <Row className='w-100'>
              <Col sm={6} className='d-flex justify-content-center'>
                <Form.Check type="checkbox" label={`Se souvenir de moi`} id='check-me' />
              </Col>
              <Col sm={6} className='d-flex justify-content-center'>
                <Link to='/newpassword'>Mot de passe perdu ?</Link>

              </Col>
            </Row>
          </InputGroup>


          <Row>
            <Col  className='d-flex justify-content-center'>
              <Button
                className="border border-2 border border-warning"
                variant="outline-warning"
                size="lg"
                type='submit'
                onClick={props.handleClose}>
                Connexion
              </Button>
            </Col>
          </Row>
        </Modal.Body>



        <Modal.Footer className="justify-content-center">
          <p>Vous n'avez pas encore de compte ? <Link to="/inscription">S'inscrire</Link></p>
        </Modal.Footer>

      </Modal>
    </>
  );
};

export default LogIn;