import React, { useContext } from 'react';
import { Grid, Card, Typography, Button, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { shoeContext } from '../context/ShoeContext';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    margin: 10,
  },
  title: {
    fontWeight: 600,
  },
  price: {
    color: '#d61f16',
    fontWeight: 600,
    fontSize: 24,
  },
  button: {
    position: 'absolute',
    bottom: 4,
    right: 15,
    backgroundColor: '#333333',
    color: '#fff',
    margin: '20px 0',
    '&:hover': {
      backgroundColor: '#d61f16',
    },
  },
  count: {
    display: 'flex',
  },
  countNum: {
    margin: '0 10px',
  },
  decrement: {
    backgroundColor: '#d61f16',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#d61f16',
    },
  },
  increment: {
    backgroundColor: '#2e7031',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#2e7031',
    },
  },
});

const ShoeCart = ({
  data: { id, thumbNail, title, description, price, count },
}) => {
  const classes = useStyles();
  const { removeCart, increment, decrement } = useContext(shoeContext);

  return (
    <Card className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <img src={thumbNail} width='100%' height='350px' alt='shoe' />
        </Grid>

        <Grid item xs={12} md={9}>
          <CardContent>
            <Typography variant='h5' gutterBottom className={classes.title}>
              {title}
            </Typography>
            <Typography variant='body1' gutterBottom>
              {description}
            </Typography>
            <Typography variant='h6' gutterBottom className={classes.price}>
              {`$${price}`}
            </Typography>
            <div className={classes.count}>
              <Button
                variant='contained'
                className={classes.decrement}
                onClick={() => decrement(id)}
              >
                -
              </Button>
              <Typography variant='h6' className={classes.countNum}>
                {count}
              </Typography>
              <Button
                variant='contained'
                className={classes.increment}
                onClick={() => increment(id)}
              >
                +
              </Button>
            </div>
            <Button
              variant='contained'
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={() => removeCart(id)}
            >
              Delete
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ShoeCart;
