// import './App.css'
import { Navbar } from './components/navbar'
import { Header } from './components/header'
import { Grid, GridItem } from './ui/grid'
import { HighLights } from './components/highlights'
import { useEffect } from 'react'
import { fetcher } from './services'
import React from 'react'

export const App = () => {

  const [photos, setPhotos] = React.useState([]); 

  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetcher('photos');
      setPhotos((prevPhotos) => {
        return [...prevPhotos, ...response]
      });
    };

    makeRequest();
  }, []);

  return (
    <Grid templateColumns='20% 80%'>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Header />
        <HighLights />
        {photos.map(photo => <img key={photo.id} src={photo.urls.small} />)}
      </GridItem>
    </Grid>
  )
};
