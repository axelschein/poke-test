import React from 'react';
import Spinner from '../layout/Spinner';
import { shape, bool, string, arrayOf, number } from 'prop-types';

class DetailClass extends React.Component {
  constructor() {
    super();
    this.state = {
      img: '',
      desImg: 'Back image',
    };
  }

  handleOnClick() {
    this.state.desImg === 'Back image'
      ? this.setState({ desImg: 'Front image' })
      : this.setState({
          desImg: 'Back image',
        });
  }

  handleImageChange() {
    this.state.img === this.props.pokeDescription.sprites?.front_default
      ? this.setState({
          img: this.props.pokeDescription.sprites?.back_default,
        })
      : this.setState({
          img: this.props.pokeDescription.sprites?.front_default,
        });
  }

  componentDidMount() {
    this.setState({ img: this.props.pokeDescription.sprites?.front_default });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokeDescription !== this.props.pokeDescription) {
      this.setState({
        img: this.props.pokeDescription.sprites?.front_default,
      });
    }
    if (prevState.desImg !== this.state.desImg) {
      this.handleImageChange();
    }
  }

  render() {
    const { pokeDescription, loading } = this.props;
    const { img, desImg } = this.state;
    const { types, abilities, name, weight, height, order } = pokeDescription;

    const pokeType = types !== undefined ? types[0].type.name : 'loading';

    const pokeAbilities = abilities
      .map((abilityObj) => abilityObj.ability.name)
      .join(' - ');

    return loading ? (
      <Spinner />
    ) : (
      <div className="all-center">
        <br />
        <h2>Hey I'm Class </h2>
        <h3>{name}</h3>
        <div className="all-center">
          <img src={img} loading="lazy" alt={name} style={{ width: '100px' }} />
          <button
            className="btn btn-primary"
            onClick={() => this.setState(this.handleOnClick())}
          >
            {desImg}
          </button>
          <br />
        </div>

        <p>Type: {pokeType}</p>
        <p>Weight: {weight} lbs</p>
        <p>Height: {height}"</p>
        <p>Number: {order}</p>
        <p>Abilities: {pokeAbilities}</p>
      </div>
    );
  }
}

DetailClass.propTypes = {
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

export default DetailClass;
