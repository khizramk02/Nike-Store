import React, { useContext } from 'react';
import Layout from './Layout';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { shoeContext } from '../context/ShoeContext';

const useStyles = makeStyles({
  title: {
    fontWeight: 600,
  },
  price: {
    color: '#d61f16',
    fontWeight: 600,
    fontSize: 24,
  },
  button: {
    backgroundColor: '#333333',
    color: '#fff',
    margin: '20px 0',
    '&:hover': {
      backgroundColor: '#d61f16',
    },
  },
  link: {
    color: '#fff',
  },
});

const ShoeDetail = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { DummyData, addCart } = useContext(shoeContext);
  const shoe = DummyData.find((shoeData) => shoeData.id === id);
  return (
    <Layout>
      <Grid container item justify='space-between'>
        <Grid item xs={12} md={6}>
          <Typography variant='h4' className={classes.title} gutterBottom>
            {shoe.title}
          </Typography>
          <Typography variant='body1' align='justify' gutterBottom>
            {shoe.description}
          </Typography>
          <Typography variant='h6' className={classes.price}>
            {`$${shoe.price}`}
          </Typography>
          <Button
            variant='contained'
            className={classes.button}
            onClick={() => addCart(shoe.id)}
          >
            Add To Cart
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <video autoPlay loop width='100%' height='400px'>
            <source src={shoe.video} type='video/mp4' />
          </video>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ShoeDetail;
