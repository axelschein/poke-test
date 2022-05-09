export const fetchPokemonApi = async (pokemon) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log('error', err);
  }
};
