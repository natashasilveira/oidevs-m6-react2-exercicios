// import './App.css'
import { Navbar } from './components/navbar'
import { Header } from './components/header'
import { Grid, GridItem } from './ui/grid'
import { HighLights } from './components/highlights'
import { useEffect } from 'react'
import { fetcher } from './services'

export const App = () => {

  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetcher('photos');
      console.log(response);
    };

    makeRequest();
  }, [])

  return (
    <Grid display='grid' templateColumns='20% 80%'>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Header />
        <HighLights />
      </GridItem>
    </Grid>
  )
}
