import React, { useContext } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { shoeContext } from '../context/ShoeContext';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  media: {
    height: 0,
    paddingTop: '90%',
  },
  title: {
    fontWeight: 600,
  },
  price: {
    color: '#d61f16',
    fontWeight: 600,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#333333',
    color: '#fff',
    marginRight: 10,
    marginTop: 5,
    '&:hover': {
      backgroundColor: '#d61f16',
    },
    '@media (min-width: 500px) and (max-width: 770px)': {
      marginRight: 4,
    },
  },
  link: {
    color: '#fff',
  },
});

const ShoeCard = ({ data: { id, thumbNail, title, price } }) => {
  const classes = useStyles();
  const { addCart } = useContext(shoeContext);
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={thumbNail} />
      <CardContent>
        <Typography variant='h6' gutterBottom className={classes.title}>
          {title}
        </Typography>
        <Typography variant='body1' gutterBottom className={classes.price}>
          {`$${price}`}
        </Typography>
        <Button variant='contained' className={classes.button}>
          <Link to={`/nike-shoe/${id}`} className={classes.link}>
            Learn More
          </Link>
        </Button>
        <Button
          variant='contained'
          className={classes.button}
          onClick={() => addCart(id)}
        >
          Add To Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ShoeCard;
