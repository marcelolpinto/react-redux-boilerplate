import React from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BaseContainer from '../BaseContainer';

class Main extends BaseContainer {
  constructor(props) {
    super(props);
  }

  renderEntity() {
    const { entity } = this.props;
    return !entity ? <div>No selected entity in store.</div> : (
      <div>
        <div>Name: {entity.name}</div>
        <div>Age: {entity.age}</div>
        <div>Favorite Color: {entity.favoriteColor}</div>
      </div>
    )
  }

  render() {
    return (
      <Container text>
        <br/>
        CONTAINER 2
        <br/>
        <br/>
        SELECTED ENTITY:
        <br/>
        {this.renderEntity()}
        <br/>
        <Link to='/container1'>Container 1</Link>        
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    entities: state.entities.all,
    entity: state.entities.current
  };
}

export default connect(
  mapStateToProps,
  null
)(Main);