import React, {Component} from "react";

import '../App.css';


import {  Thumbnail, Button } from 'react-bootstrap';

export default class Images extends Component {
    render() {
        return (
           
                        <Thumbnail src={this.props.img}>
                            <h3>{this.props.des}</h3>
                            <p>
                                <Button onClick={this.props.yzid} bsStyle="primary">Buy</Button>
                                &nbsp;
                                
                            </p>
                        </Thumbnail>
                  
        );
    }
}