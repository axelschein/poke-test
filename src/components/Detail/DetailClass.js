import React from 'react';
import '../../App.css';

class DetailClass extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { pokeDescription } = this.props;

    return pokeDescription === {} ? (
      <p>loading...</p>
    ) : (
      <div>
        <h2>Hey I'm Class </h2>
        <h3>{pokeDescription.name}</h3>
      </div>
    );
  }
}

export default DetailClass;
