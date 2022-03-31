import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Card, Button, Row, Col} from 'react-bootstrap';


const CardProduct = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://${process.env.REACT_APP_API_PRODUCTS}`)
      .then((response) => {
        setProducts(response.data.data);
        console.log(products);
      });
  }, []);




  return(




  <Container className="d-flex justify-content-center flex-wrap">
    {products.map((product) =>(


    <Card key={product.id} style={{ width: '21rem' }} className="m-3">
  <Card.Img variant="top"  src={product.attributes.photo.data[0].attributes.formats.thumbnail.url} />
  <Card.Body className="bg-light">
    <Card.Subtitle className="fs-3 fw-bold">{product.attributes.price} €</Card.Subtitle>
    <Card.Title className="text-center text-uppercase fs-3 fw-bold">{product.attributes.name}</Card.Title>
   
    <Card.Text className="text-justify">
    {product.attributes.description}
    </Card.Text>
    <Row  className="d-grid gap-2">
    
      <Col className="d-flex justify-content-center" xs={12}><Button variant="warning" size="lg">Acheter maintenant</Button></Col>
      <Col className="d-flex justify-content-center" xs={12}><Button variant="warning" size="lg">Ajoutez au panier</Button></Col>
   
    </Row>
  </Card.Body>

  <Card.Footer>
    <a href='#'>Catégorie : {product.attributes.category.data.attributes.name}</a>
  </Card.Footer>
</Card>
    ))}

  </Container>

  )}





export default CardProduct;