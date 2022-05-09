import './App.css';
import DetailFunctional from './components/Detail/DetailFunctional';
import DetailClass from './components/Detail/DetailClass';
import { useEffect, useState } from 'react';
import { fetchPokemonApi } from './api/pokemon';

function App() {
  const [pokemonName, setPokemonName] = useState('ditto');

  const [pokeDescription, setPokeDescription] = useState({});


  const fetchPokemon = async () => {
    const description = await fetchPokemonApi(pokemonName);
    setPokeDescription(description);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <DetailFunctional pokemon={pokeDescription}/>
      <DetailClass pokemon={pokeDescription}/>
    </div>
  );
}

export default App;
