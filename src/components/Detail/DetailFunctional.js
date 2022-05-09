import '../../App.css';
import React, { useState, useEffect } from 'react';
import Spinner from '../layout/Spinner';

function DetailFunctional({ pokeDescription, loading }) {
  const [img, setImg] = useState('');
  const [desImg, setDesImg] = useState('Back image');

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
  useEffect(() => {
    if (img === '') {
      setTimeout(() => {
        setImg(pokeDescription.sprites?.front_default);
      }, 1000);
    }
  }, [img]);

  useEffect(() => {
    desImg === 'Back image'
      ? setImg(pokeDescription.sprites?.back_default)
      : setImg(pokeDescription.sprites?.front_default);
  }, [desImg]);

  const handleOnClick = () => {
    desImg === 'Back image'
      ? setDesImg('Front image')
      : setDesImg('Back image');
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className="container">
      <h2>Hey I'm functional </h2>
      <h3>{pokeDescription.name}</h3>
      <div className="container">
        <img
          src={img}
          loading="lazy"
          alt={pokeDescription.name}
          style={{ width: '100px' }}
        />
        <button onClick={() => setDesImg(handleOnClick)}>{desImg}</button>
      </div>

      <p>Type: {pokeType}</p>
      <p>Weight: {pokeDescription.weight} lbs</p>
      <p>Height: {pokeDescription.weight}"</p>
      <p>Number: {pokeDescription.order}</p>
      <p>Abilities: {pokeAbilities}</p>
    </div>
  );
}

export default DetailFunctional;
