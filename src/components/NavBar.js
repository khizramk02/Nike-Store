import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from '@material-ui/core';
import Logo from '../assets/logo.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { shoeContext } from '../context/ShoeContext';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: 600,
    fontSize: 30,
    color: '#333',
  },
  appBar: {
    backgroundColor: '#fff',
    color: '#000',
    minHeight: 80,
    justifyContent: 'center',
  },
  logo: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    color: '#333',
  },
  badge: {
    color: '#d61f16',
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const { cart } = useContext(shoeContext);

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Link to='/' className={classes.logo}>
            <img src={Logo} alt='logo' width='80px' height='50px' />
            <Typography variant='h5' className={classes.title}>
              NIKE
            </Typography>
          </Link>
          <Link to='/cart'>
            <IconButton aria-label='cart' color='inherit'>
              <Badge badgeContent={cart.length} color='error'>
                <ShoppingCartIcon
                  fontSize='large'
                  className={classes.cartIcon}
                />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
