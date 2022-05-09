import React from 'react';
import Spinner from '../layout/Spinner';
import '../../App.css';

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
      : this.setState({ desImg: 'Back image' });
  }

  handleImageChange() {
    console.log('handle');
    this.state.img === this.props.pokeDescription.sprites?.front_default
      ? this.setState({
          img: this.props.pokeDescription.sprites?.back_default,
        })
      : this.setState({
          img: this.props.pokeDescription.sprites?.front_default,
        });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ img: this.props.pokeDescription.sprites?.front_default });
      console.log('mount');
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokeDescription !== this.props.pokeDescription) {
      this.setState({
        img: this.props.pokeDescription.sprites?.front_default,
      });
      console.log('update2');
    }
    if (prevState.desImg !== this.state.desImg) {
      this.handleImageChange();
      console.log('update1');
    }
  }

  render() {
    const { pokeDescription, loading } = this.props;

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

    return loading ? (
      <Spinner />
    ) : (
      <div>
        <h2>Hey I'm Class </h2>
        <h3>{pokeDescription.name}</h3>
        <img
          src={this.state.img}
          loading="lazy"
          alt={pokeDescription.name}
          style={{ width: '100px' }}
        />

        <button onClick={() => this.setState(this.handleOnClick())}>
          {this.state.desImg}
        </button>

        <p>Type: {pokeType}</p>
        <p>Weight: {pokeDescription.weight} lbs</p>
        <p>Height: {pokeDescription.weight} "</p>
        <p>Number: {pokeDescription.order}</p>
        <p>Abilities: {pokeAbilities}</p>
      </div>
    );
  }
}

export default DetailClass;
