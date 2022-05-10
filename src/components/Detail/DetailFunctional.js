import React, { useState, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import { shape, bool, string, arrayOf, number } from 'prop-types';

function DetailFunctional({ pokeDescription, loading }) {
  const { types, abilities, sprites, name, weight, order } = pokeDescription;
  const [img, setImg] = useState('');
  const [desImg, setDesImg] = useState('Back image');

  const pokeType = types ? types[0].type.name : 'loading';
  const pokeAbilities = abilities
    ? `${abilities[0].ability.name} and ${abilities[1].ability.name}`
    : 'loading';

  const handleOnClick = () => {
    desImg === 'Back image'
      ? setImg(sprites.back_default)
      : setImg(sprites.front_default);
  };
  useEffect(() => {
    if (img === sprites.front_default) {
      setDesImg('Back image');
    } else {
      setDesImg('Front image');

      // switch (img) {
      //   case '':
      //     setImg(sprites.front_default);
      //     break;
      //   case sprites.front_default:
      //     setDesImg('Back image');
      //     break;

      //   default:
      //     setDesImg('Front image');
      //     break;
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
      <p>Height: {weight}"</p>
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
