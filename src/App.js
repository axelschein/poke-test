import './App.css';
import DetailFunctional from './components/Detail/DetailFunctional';
import DetailClass from './components/Detail/DetailClass';
import { useEffect, useState } from 'react';
import { fetchPokemonApi } from './api/pokemon';

function App() {
  const [pokemonName, setPokemonName] = useState('ditto');
  const [change, setChange] = useState('');
  const [loading, setLoading] = useState(false);
  const [pokeDescription, setPokeDescription] = useState({});

  const fetchPokemon = async () => {
    const description = await fetchPokemonApi(pokemonName);
    setPokeDescription(description);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(change);
    setLoading(true);
  };

  useEffect(() => {
    setLoading(true);
    try {
      fetchPokemon();
      console.log('effect');
    } catch (err) {
      console.log('error', err);
    } finally {
      setLoading(false);
    }
  }, [pokemonName]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Enter a pokemon name or a random number:
          <input type="text" onChange={(e) => setChange(e.target.value)} />
        </label>
        <input type="submit" />
      </form>
      <DetailFunctional pokeDescription={pokeDescription} />
      {/* <DetailClass pokemon={pokeDescription}/> */}
    </div>
  );
}

export default App;
