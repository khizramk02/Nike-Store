import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: '0 0 5px #ccc',
    padding: '15px 10px',
    margin: '120px 0 40px 0',
    '@media(max-width: 600px)': {
      boxShadow: 'none',
    },
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <Grid container justify='center'>
      <Grid item xs={false} sm={1}></Grid>
      <Grid container item xs={12} sm={10} spacing={3} className={classes.root}>
        {props.children}
      </Grid>
      <Grid item xs={false} sm={1}></Grid>
    </Grid>
  );
};

export default Layout;
