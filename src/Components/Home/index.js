import React from 'react';
import './home.css';
import Navbar from '../NavBar';
import { Container, Block, Card, Media, Heading, Content, Button, Columns } from 'react-bulma-components';



const HomePage = () => (

  <div className=' content homePage'>
    <Navbar />

    <Block className='homePage_title'>
      <p>Bienvenue chez vous, retrouvez les produits du moment qui font le buzz sur internet.</p>
    </Block>



    <Container className='homePage_container'>


      <Block className='card_container'>

        <Card style={{ width: '20rem' }} className='card_product'>
          <Card.Image
            src='/assets/images/tasse_basket.png'
          />
          <Card.Content>

            <Card.Image>
              <Media.Item>
                <Heading className='product_title' >Une tasse basket</Heading>
              </Media.Item>
              <Media.Item >
                <span className="product_price" >€19.90</span>
              </Media.Item>
            </Card.Image>

            <Content className='product_description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
              iaculis mauris.
            </Content>


            <Button className='btn-add-cart'> Ajouter dans le panier</Button>
            <Button className='btn-shop-now'> Acheter maintenant</Button>


            <Card.Footer>
              <a href="/categorie/cuisine">Catégorie : Cuisine</a>
            </Card.Footer>


          </Card.Content>
        </Card>
        <Card style={{ width: '20vw' }} className='card_product'>
          <Card.Image
            src='/assets/images/tasse_basket.png'
          />
          <Card.Content>

            <Media>
              <Media.Item>
                <Heading size={2.5}>Une tasse basket</Heading>
              </Media.Item>
              <Media.Item align='left'>
                <Heading size={3.5}>€19.90</Heading>
              </Media.Item>
            </Media>

            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
              iaculis mauris.
            </Content>


            <Button> Ajouter dans le panier</Button>
            <Button> Acheter maintenant</Button>


            <Card.Footer>
              <a href="/categorie/cuisine">Catégorie : Cuisine</a>
            </Card.Footer>


          </Card.Content>
        </Card>
        <Card style={{ width: '20vw' }} className='card_product'>
          <Card.Image
            src='/assets/images/tasse_basket.png'
          />
          <Card.Content>

            <Media>
              <Media.Item >
                <Heading className='product_title' >Une tasse basket</Heading>
              </Media.Item>
              <Media.Item >
                <Heading className='product_price' >€19.90</Heading>
              </Media.Item>
            </Media>

            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
              iaculis mauris.
            </Content>


            <Button> Ajouter dans le panier</Button>
            <Button> Acheter maintenant</Button>


            <Card.Footer>
              <a href="/categorie/cuisine">Catégorie : Cuisine</a>
            </Card.Footer>


          </Card.Content>
        </Card>
        <Card style={{ width: '20vw' }} className='card_product'>
          <Card.Image
            src='/assets/images/tasse_basket.png'
          />
          <Card.Content>

            <Media>
              <Media.Item>
                <Heading size={2.5}>Une tasse basket</Heading>
              </Media.Item>
              <Media.Item align='left'>
                <Heading size={3.5}>€19.90</Heading>
              </Media.Item>
            </Media>

            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
              iaculis mauris.
            </Content>


            <Button> Ajouter dans le panier</Button>
            <Button> Acheter maintenant</Button>


            <Card.Footer>
              <a href="/categorie/cuisine">Catégorie : Cuisine</a>
            </Card.Footer>


          </Card.Content>
        </Card>


      </Block>








    </Container>

  </div>
);

export default HomePage;