import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';


class Site extends Component {
  render() {
    return (

      <div className="body">
        <center>
          <Grid>
            <Row>
              <Col xs={12} md={12} lg={12} className="insta">
                <img src="./aa.jpg" className="hazem" />
                {/* <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div className="hovereffect">
                    <img className="img-responsive" src="./aa.jpg" alt=""/>
                      <div className="overlay">
                
                        <p className="icon-links">
                        */}
                <div className="kamalt">
               
                  <a href="https://www.instagram.com/zooma.mag/" >
                    <Glyphicon glyph="glyphicon glyphicon-camera" />
                  </a>
                </div>



              </Col>
            </Row>
          </Grid>;
        </center>
      </div>
    );
  }
}

export default Site;