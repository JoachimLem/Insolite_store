import React, { useState } from 'react';
import { Modal, Button, InputGroup, FormControl, Form } from 'react-bootstrap';


const LogIn = ({ show }) => {


  let modalShow = show;


  const handleClose = () => {
    console.log(modalShow);
    modalShow = false;
    console.log(modalShow);
  };



  return (
    <>


      <Modal show={modalShow} onHide={handleClose} centered>

        <Modal.Header closeButton>
          <Modal.Title>Connexion</Modal.Title>
        </Modal.Header>


        <Modal.Body>
          <p>Connectez vous pour accéder à tous nos services et pouvoir passer commande auprès de nous.</p>



          <Form.Label htmlFor="basic-url">Email : </Form.Label>
          <InputGroup className="mb-3">
          
            <FormControl id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>



          <Form.Label htmlFor="basic-url">Mot de passe : </Form.Label>
          <InputGroup className="mb-3">
           
            <FormControl id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>


          <InputGroup className="mb-3">
    <InputGroup.Checkbox aria-label="Se souvenir de moi" />
    <FormControl aria-label="Se souvenir de moi" />
  </InputGroup>



        </Modal.Body>



        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Connexion
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  );
};

export default LogIn;