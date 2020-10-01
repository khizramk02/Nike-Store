import React, { useContext } from 'react';
import Layout from './Layout';
import { shoeContext } from '../context/ShoeContext';
import ShoeCard from './ShoeCard';
import { Grid } from '@material-ui/core';

const Home = () => {
  const { DummyData } = useContext(shoeContext);
  return (
    <Layout>
      {DummyData.map((shoe) => (
        <Grid key={shoe.id} item xs={12} sm={6} lg={4}>
          <ShoeCard data={shoe} />
        </Grid>
      ))}
    </Layout>
  );
};

export default Home;
