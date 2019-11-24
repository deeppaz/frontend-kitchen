import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OrderTableGelen from './components/OrderTableGelen';
import OrderTableOnaylanan from './components/OrderTableOnaylanan';
import OrderTableGiden from './components/OrderTableGiden';

const styles = {
  hrLine: {
    marginTop: '10%'
  },
};

function App(props) {
  const { classes } = props;
  return (
    <div className="container">
      <hr />
      <h1>Gelen Siparişler</h1>
      <hr />
      <OrderTableGelen />
      <hr className={classes.hrLine}/>
      <h1>Onaylanan Siparişler</h1>
      <hr />
      <OrderTableOnaylanan />
      
      <hr className={classes.hrLine}/>
      <h1>Giden Siparişler</h1>
      <hr />
      <OrderTableGiden />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(App);
