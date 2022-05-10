import './App.css';
import DetailFunctional from './components/Detail/DetailFunctional';
import DetailClass from './components/Detail/DetailClass';
import { useEffect, useState } from 'react';
import { fetchPokemonApi } from './api/pokemon';
import Alert from './components/layout/Alert';

function App() {
  const [pokemonName, setPokemonName] = useState('ditto');
  const [change, setChange] = useState('');
  const [pokeDescription, setPokeDescription] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const fetchPokemon = async () => {
    setLoading(true);
    try {
      const description = await fetchPokemonApi(pokemonName, showAlert);
      setPokeDescription(description);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (change === '') {
      showAlert('Please enter something', 'light');
    } else {
      setPokemonName(change);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [pokemonName]);

  return (
    <div className="container all-center">
      <form onSubmit={handleSubmit}>
        <label className="lead">
          Enter a pokemon name or a random number:
          <input type="text" onChange={(e) => setChange(e.target.value)} />
        </label>
        <Alert alert={alert} />
        <input type="submit" className="btn btn-success" />
      </form>

      {pokeDescription && (
        <>
          <DetailFunctional
            pokeDescription={pokeDescription}
            loading={loading}
          />
          <DetailClass pokeDescription={pokeDescription} loading={loading} />
        </>
      )}
    </div>
  );
}

export default App;
