import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {
  const totalQuantity = useSelector(state => state.AddToCart.totalQuantity);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
  const classes = useStyles();

  
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Typography >
            <ShoppingCartIcon/>
            <span>{totalQuantity}</span>
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  
  );
}

export default Navbar;
