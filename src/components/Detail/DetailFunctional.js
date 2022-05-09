import '../../App.css';

function DetailFunctional({ pokeDescription }) {
  const pokeType =
    pokeDescription.types !== undefined
      ? pokeDescription.types[0].type.name
      : 'loading';
  const pokeAbilities =
    pokeDescription.abilities !== undefined
      ? pokeDescription.abilities[0].ability.name +
        ' and ' +
        pokeDescription.abilities[1].ability.name
      : 'loading';
  return pokeDescription === {} ? (
    <p>loading...</p>
  ) : (
    <div className="container">
      <h2>Hey I'm functional </h2>
      <h3>{pokeDescription.name}</h3>
      <div className="container"></div>

      <p>Type: {pokeType}</p>
      <p>Weight: {pokeDescription.weight} lbs</p>
      <p>Height: {pokeDescription.weight}"</p>
      <p>Number: {pokeDescription.order}</p>
      <p>Abilities: {pokeAbilities}</p>
    </div>
  );
}

export default DetailFunctional;
