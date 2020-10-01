import React, { useContext } from 'react';
import Layout from './Layout';
import ShoeCart from './ShoeCart';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { shoeContext } from '../context/ShoeContext';

const useStyles = makeStyles({
  amount: {
    fontWeight: 600,
    color: '#d61f16',
    margin: 10,
  },
  empty: {
    margin: '0 auto',
    fontWeight: 600,
    color: '#999',
  },
  emptyDiv: {
    minHeight: '100vh',
  },
});

const Cart = () => {
  const classes = useStyles();
  const { cart } = useContext(shoeContext);
  let totalAmount = 0;
  cart.forEach((shoe) => {
    totalAmount += shoe.price * shoe.count;
  });

  if (cart.length) {
    return (
      <Layout>
        {cart.map((shoeData) => (
          <ShoeCart key={shoeData.id} data={shoeData} />
        ))}
        <Typography variant='h5' className={classes.amount}>
          {`Total Amount : $${totalAmount}`}
        </Typography>
      </Layout>
    );
  } else {
    return (
      <div className={classes.emptyDiv}>
        <Layout>
          <Typography variant='h4' className={classes.empty}>
            Empty Cart
          </Typography>
        </Layout>
      </div>
    );
  }
};

export default Cart;
