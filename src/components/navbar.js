import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import  { Navbar,Nav,NavItem} from  'react-bootstrap';

const styles = {
    root: {width: 500}
};
class SimpleBottomNavigation extends React.Component {
    state = { value: 0 };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
render() {
        return (
            <div className="navbar">
                <div className="items">
                    <Navbar inverse collapseOnSelect >
                        <Navbar.Header>
                            <h1>ZOOMA</h1>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                            <br/>
                            <NavItem href="#">
                                <Link  className="zina" to="/">Zoomazing</Link>
                            </NavItem>
                            <NavItem href="#">
                                <Link  className="zina" to="/meryoul">our shop</Link>
                            </NavItem>
                            <NavItem href="#">
                                <Link  className="zina" to="/site">contact us</Link>
                            </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>    
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(SimpleBottomNavigation);