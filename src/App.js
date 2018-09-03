import React, { Component } from 'react';
import { Carousel} from 'react-bootstrap';

import './App.css';



class App extends Component {
  render() {
    return (

      <Carousel>
      <Carousel.Item className="carousel-wrapper">
        <img className="caro" alt="900x500" src="https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <p> Zooma
🔘 First Tunisian Streetwear magazine
🔘 Jiggies' home
🔘 knowledge X fashion 
🔘 Magazine sections on stories
⚫️BECAUSE ZOOMA sTREATs YOU BETTER.⚫️
    </p>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-wrapper">
        <img className="caro" alt="900x500" src="https://images.unsplash.com/photo-1534255855663-e10379e3454d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=97cbc9dce69b3a22400b3b825817f819&auto=format&fit=crop&w=750&q=80" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-wrapper">
        <img className="caro" alt="900x500" src="https://images.pexels.com/photos/569163/pexels-photo-569163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    );
  }
}

export default App;
