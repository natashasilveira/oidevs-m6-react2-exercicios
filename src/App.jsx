// import './App.css'
import { Navbar } from './components/navbar'
import { Header } from './components/header'
import { Grid, GridItem } from './ui/grid'


export const App = () => {

  return (
    <Grid display='grid' templateColumns='1fr 4fr'>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Header />
      </GridItem>
    </Grid>
  )
}

// export default App;
