// import './App.css'
import { Navbar } from './components/navbar'
import { Header } from './components/header'
import { Feed } from './components/feed'
import { Grid, GridItem } from './ui/grid'
import { HighLights } from './components/highlights'
import { useEffect } from 'react'
import { fetcher } from './components/services'
import React from 'react'

export const App = () => {

  // const [photos, setPhotos] = React.useState([]);

  // useEffect(() => {
  //   const makeRequest = async () => {
  //     const response = await fetcher('photos');
  //     setPhotos(response);
  //   };

  //   makeRequest();
  // }, []);

  return (
    <Grid templateColumns='20% 80%'>
      <GridItem>
        <Navbar />
      </GridItem>

      <GridItem>
        <Header />
        <HighLights />
        <Feed />
      </GridItem>
    </Grid>
  )
};
