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
  const [text, setText] = React.useState('')

  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetcher('photos');
      setPhotos(response);
    };

    makeRequest();
  }, []);

  const transformedPhotos = React.useMemo(() => {
    console.log('Entrou no useMemo')
    return 'Fotos Transformadas'
    // return photos.map(item => item.urls.small);
  }, [photos]);

  const transformedPhotos2 = () => {
    console.log('Oi - Trans 2');
    return 'Transformed 2'
  }

  console.log(transformedPhotos)
  transformedPhotos2();

  return (
    <Grid templateColumns='20% 80%'>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Header />
        <HighLights />
        <input placeholder='Text' 
        onChange={(e) => setText(e.currentTarget.value)} 
        />
        {photos.map(photo => <img key={photo.id} src={photo.urls.small} />)}
      </GridItem>
    </Grid>
  )
};
