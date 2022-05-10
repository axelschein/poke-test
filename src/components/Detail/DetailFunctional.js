import React, { useState, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import { shape, bool, string, arrayOf, number } from 'prop-types';

function DetailFunctional({ pokeDescription, loading }) {
  const { types, abilities, sprites, name, weight, height, order } =
    pokeDescription;
  const [pokeName, setPokeName] = name;
  const [img, setImg] = useState('');
  const [desImg, setDesImg] = useState('Back image');

  const pokeType = types ? types[0].type.name : loading;
  const pokeAbilities = abilities
    .map((abilityObj) => abilityObj.ability.name)
    .join(' - ');

  const handleOnClick = () => {
    desImg === 'Back image'
      ? setImg(sprites.back_default)
      : setImg(sprites.front_default);
  };
  useEffect(() => {
    setImg(sprites.front_default);
  }, [pokeName]);

  useEffect(() => {
    if (img === sprites.front_default) {
      setDesImg('Back image');
    } else {
      setDesImg('Front image');
    }
  }, [img]);

  return loading ? (
    <Spinner />
  ) : (
    <div className="all-center">
      <br />
      <h2>Hey I'm functional </h2>
      <h3>{name}</h3>
      <div className="all-center">
        <img src={img} loading="lazy" alt={name} style={{ width: '100px' }} />
        <button
          className="btn btn-primary"
          onClick={() => setDesImg(handleOnClick)}
        >
          {desImg}
        </button>
      </div>

      <p>Type: {pokeType}</p>
      <p>Weight: {weight} lbs</p>
      <p>Height: {height}"</p>
      <p>Number: {order}</p>
      <p>Abilities: {pokeAbilities}</p>
    </div>
  );
}

DetailFunctional.propTypes = {
  pokeDescription: shape({
    types: arrayOf(
      shape({
        name: string,
      })
    ),
    abilities: arrayOf(
      shape({
        ability: shape({
          name: string,
        }),
      })
    ),
    sprites: shape({
      front_default: string,
      back_default: string,
    }),
    name: string,
    weight: number,
    order: number,
  }).isRequired,
  loading: bool.isRequired,
};

export default DetailFunctional;
