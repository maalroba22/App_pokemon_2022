import CardPokemon from './components/CardPokemon';
import Nav from './components/Nav/Nav';
import { Route } from 'react-router-dom';
import Favorito from './components/Search/Favorito';
//import Searhs from './components/Search/Searhs';
function App() {
  return (
    <div className="App">
      <Route path="/" render={() => <Nav />} />
      <Route path="/" exact render={() => <CardPokemon />} />

      <Route path="/favorito" component={Favorito} />
    </div>
  );
}

export default App;
