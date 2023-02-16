import { Grid, GridItem } from "../ui/grid"
import { Navbar } from "../components/navbar"
import { Header } from "../components/header"
import { HighLights } from "../components/highlights"
import { Feed } from "../components/feed"

export const Home = (props) => {
  return (
    <Grid templateColumns='20% 80%'>
      <GridItem>
        <Navbar onClickLogin={props.onClickLogin} />
      </GridItem>

      <GridItem>
        <Header />
        <HighLights />
        <Feed />
      </GridItem>
    </Grid>
  )
}