import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Modal, Button, InputGroup, FormControl, Form, Row, Col } from 'react-bootstrap';
import { useCookies } from 'react-cookie';




const LogIn = ({ show,handleClose}) => {

  const [cookies, setCookie] = useCookies(['name']);

  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const loginFormData = new FormData();


    loginFormData.append("identifier", formValue.email)
    loginFormData.append("password", formValue.password)

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "http://localhost:1337/api/auth/local",
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
    
     setCookie('access-token',response.data.jwt,['httpOnly']);
     setCookie('name',response.data.user.firstName,['httpOnly']);
     
      console.log(response);

      
    } catch (error) {
      console.log(error)
      console.log(loginFormData);
    }
  };

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
  };


  return (
    <>
      <Modal show={show} onHide={handleClose} centered >

        <Modal.Header closeButton>
          <Modal.Title>Connexion</Modal.Title>
        </Modal.Header>


        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            <Row className="mb-3">
              <Col className="text-center">
                Connectez vous pour accéder à tous nos services et pouvoir passer commande auprès de nous.
              </Col>
            </Row>



            <Form.Label htmlFor="email">Email : </Form.Label>
            <InputGroup className="mb-3">

              <FormControl
                name="email"
                value={formValue.email}
                onChange={handleChange}
                id="email"
                aria-describedby="basic-addon3"
                type="email" />
            </InputGroup>



            <Form.Label htmlFor="password">Mot de passe : </Form.Label>
            <InputGroup className="mb-3">

              <FormControl
                name="password"
                value={formValue.password}
                onChange={handleChange}
                id="password"
                aria-describedby="basic-addon3"
                type="password" />
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
              <Col className='d-flex justify-content-center'>
                <Button
                  className="border border-2 border border-warning"
                  variant="outline-warning"
                  size="lg"
                  type='submit'
                  onClick={handleClose}>
                  Connexion
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>



        <Modal.Footer className="justify-content-center">
          <p>Vous n'avez pas encore de compte ? <Link to="/inscription">S'inscrire</Link></p>
        </Modal.Footer>

      </Modal>
    </>
  );

};

export default LogIn;