import './Detail.css';

function DetailFunctional({ pokeDescription }) {
  return pokeDescription === {} ? (
    <p>loading...</p>
  ) : (
    <div>
      <h2>Hey I'm functional </h2>
      <h3>{pokeDescription.name}</h3>
    </div>
  );
}

export default DetailFunctional;
