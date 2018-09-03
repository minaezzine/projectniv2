import React, { Component } from 'react';
import { Grid, Row, Col,Glyphicon } from 'react-bootstrap';

import './App.css';
import Images from './components/images';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Badge from '@material-ui/core/Badge';


class Meryoul extends Component {
  state={x:0}
  render() {
 
  
    
    return (
      <div className="body">
      
      <Badge badgeContent={this.state.x} color="primary" className="kamalt">
                    <ShoppingCartIcon />
                  </Badge>           
     
      <Grid>
        <Row >
          <Col className="bleu" xs={3} md={3} lg={3}>

            <Images yzid={this.yzid} img="./caro2.jpg" des="100Dt" />
          </Col>
          <Col className="bleu" xs={3} md={3} lg={3}>

            <Images yzid={this.yzid} img="./caro3.jpg" des="130Dt" />
          </Col>
          <Col className="bleu" xs={3} md={3} lg={3}>

            <Images yzid={this.yzid} img="./caro4.jpg" des="180Dt" />
          </Col>
          <Col className="bleu" xs={3} md={3} lg={3}>

            <Images yzid={this.yzid} img="./caro5.jpg" des="90Dt" />
          </Col>
          <Col className="bleu" xs={3} md={3} lg={3}>

            <Images yzid={this.yzid} img="./caro6.jpg" des="200Dt" />
          </Col>
          <Col className="bleu" xs={3} md={3} lg={3}>

            <Images yzid={this.yzid}img="./caro7.jpg" des="110Dt" />
          </Col>
          <Col className="bleu" xs={3} md={3} lg={3}>

            <Images yzid={this.yzid} img="./caro8.jpg" des="120Dt" />
          </Col>
          <Col className="bleu" xs={3} md={3} lg={3}>

            <Images yzid={this.yzid} img="./caro9.jpg" des="100Dt" />
          </Col>
          <Col className="bleu" xs={3} md={3} lg={3}>

            <Images yzid={this.yzid} img="./caro10.jpg" des="100Dt" />
          </Col>
          <Col className="bleu" xs={3} md={3} lg={3}>

            <Images yzid={this.yzid} img="./caro11.jpg" des="80Dt" />
          </Col>
          <Col className="bleu" xs={3} md={3} lg={3}>

            <Images yzid={this.yzid} img="./caro12.jpg" des="120Dt" />
          </Col>
          <Col className="bleu" xs={3} md={3} lg={3}>

            <Images yzid={this.yzid} img="./caro13.jpg" des="140Dt" />
          </Col>
          <Col className="bleu" xs={3} md={3} lg={3}>

            <Images yzid={this.yzid} img="./caro14.jpg" des="700Dt" />
          </Col>
          <Col className="bleu" xs={3} md={3} lg={3}>

            <Images yzid={this.yzid} img="./caro15.jpg" des="100Dt" />
          </Col>
        </Row>
      </Grid>
      
      </div>

    );
  }
  yzid = () => {
    this.setState({ x : this.state.x + 1}); 
  }
  
}

export default Meryoul;