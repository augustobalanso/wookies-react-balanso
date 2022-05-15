import './App.css';
import ItemListContainer from './components/itemListContainer/itemListContainer.js'
import NavBar from './components/NavBar/navbar.js';
import { Container, Grid } from '@mui/material';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Grid container>
          <ItemListContainer title={"Undercover Dunk Hi 1985 Sneakers Black"} price={53000} image={"./img/wookies-prod1.jpg"} />
          <ItemListContainer title={"Air Force 1 '07 QS 'UNO' Sneakers Multicolor"} price={65000} image={"./img/wookies-prod2.jpg"} />
          <ItemListContainer title={"Forum 84 Hi AEC Sneakers Blue"} price={45000} image={"./img/wookies-prod4.jpg"} />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
