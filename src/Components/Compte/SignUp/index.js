import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './signup.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const SignUp = () => {

  const [formValue, setFormValue] = useState({
    username: '',
    lastName: '',
    firstName: '',
    email: '',
    birthday: '',
    password: ''
  });

  const handleSubmit = async(e) => {
    e.preventDefault();

    const loginFormData = new FormData();

    loginFormData.append("username", formValue.lastName)
    loginFormData.append("lastName", formValue.lastName)
    loginFormData.append("firstName", formValue.firstName)
    loginFormData.append("email", formValue.email)
    loginFormData.append("birthday", formValue.birthday)
    loginFormData.append("password", formValue.password)
    
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "http://localhost:1337/api/users",
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
      console.log(loginFormData);
    }
  }

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
  }


  return (
    <section className="vh-100 signup_container">
      <Link className="text-light" to="/home">Accueil</Link>


      <h1 className="text-center text-light">Inscription</h1>

      <div className="d-flex align-items-center h-100">


        <Container className="h-100">
          <Row className="justify-content-center align-items-center h-100">
            <Col className="col-12 col-md-12 col-lg-8 col-xl-9">
              <Card style={{ borderRadius: '15px' }}>


                <Card.Header as="h6">Veuillez remplir ce formulaire pour créer un compte!</Card.Header>

                <Card.Body className=" p-5 d-flex align-items-center justify-content-center border-none">
                  <Form onSubmit={handleSubmit} className="border rounded text-center--lg p-3 w-75 ">

                    <Form.Group className="mb-3" controlId="formBasicLastName">
                      <Row>
                        <Col lg={6}>
                          <Form.Label>Nom</Form.Label>
                        </Col>

                        <Col lg={6}>
                          <Form.Control
                            name="lastName"
                            value={formValue.lastName}
                            onChange={handleChange}
                            type="text"
                            placeholder="Nom" />
                        </Col>
                      </Row>
                    </Form.Group>



                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                      <Row>
                        <Col lg={6}>
                          <Form.Label>Prénom</Form.Label>
                        </Col>

                        <Col lg={6}>
                          <Form.Control
                            name="firstName"
                            value={formValue.firstName}
                            onChange={handleChange}
                            type="text"
                            placeholder="Prénom" />
                        </Col>
                      </Row>
                    </Form.Group>



                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Row>
                        <Col lg={6}>
                          <Form.Label>Email</Form.Label>
                        </Col>
                        <Col lg={6}>
                          <Form.Control
                            name="email"
                            value={formValue.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Email" />
                        </Col>
                      </Row>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicBirthday">
                      <Row>
                        <Col lg={6}>
                          <Form.Label>Date de Naissance</Form.Label>
                        </Col>

                        <Col lg={6}>
                          <Form.Control
                            name="birthday"
                            value={formValue.birthday}
                            onChange={handleChange}
                            type="date"
                            placeholder="JJ/MM/AA" />
                        </Col>
                      </Row>
                    </Form.Group>







                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Row>
                        <Col lg={6}>
                          <Form.Label>Password</Form.Label>
                        </Col>
                        <Col lg={6}>
                          <Form.Control
                           name="password"
                           value={formValue.password}
                           onChange={handleChange}
                           type="password" 
                           placeholder="Mot de passe" />
                        </Col>
                      </Row>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                      <Row>
                        <Col lg={6}>
                          <Form.Label>Confirmer mot de passe</Form.Label>
                        </Col>
                        <Col lg={6}>
                          <Form.Control type="password" placeholder="Mot de passe" />
                        </Col>
                      </Row>
                    </Form.Group>



                    <Row>
                      <Col className="text-center mb-4">
                        <Button variant="warning" type="submit">
                          Inscription
                        </Button>
                      </Col>
                    </Row>
                    <Card.Footer>

                      <Row>
                        <Col>Vous avez un compte ?
                          <Link to="/home"> Se connecter</Link>
                        </Col>
                      </Row>
                    </Card.Footer>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

    </section>



  )
};


export default SignUp;