import React, {Component} from "react";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';



 class SimpleTooltips extends Component {
    render() {
      

  return (
    <div>
      
      <Tooltip title="Add">
        <Button variant="fab" color="primary" aria-label="Add" >
          <AddIcon />
        </Button>
      </Tooltip>
     
    </div>
  );
}
}

SimpleTooltips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(SimpleTooltips);