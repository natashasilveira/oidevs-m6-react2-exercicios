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

  const allSmallPhotosMemoized = React.useMemo(() => {
    console.log('Entrou no useMemo')
    return 'Fotos Transformadas'
    // return photos.map(item => item.urls.small);
  }, [photos]);

  const allSmallPhotosNOTMemoized = () => {
    console.log('Oi - Trans 2');
    return photos.map(item => item.urls.small);
  }

  console.log(allSmallPhotosMemoized)
  allSmallPhotosNOTMemoized();

  // const onChangeHandler = (e) => {
  //   console.log('Chamando set Text')
  //   setText(e.currentTarget.value)
  // }

  const onChangeHandler = React.useCallback((e) => {
    console.log('Chamando set Text')
    console.log(photos)
    setText(e.currentTarget.value)
  }, [])

  return (
    <Grid templateColumns='20% 80%'>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <input placeholder='Text' 
        onChange={onChangeHandler} 
        />
        <Header />
        <HighLights />
        {photos.map(photo => <img key={photo.id} src={photo.urls.small} />)}
      </GridItem>
    </Grid>
  )
};
