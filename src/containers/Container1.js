import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import isequal from 'lodash.isequal';

import BaseContainer from '../BaseContainer';
import { setEntityAction, setEntitiesAction } from '../actions';
import { Container1Controller } from '../controllers';
import { Entities } from '../models';
import { Button, Container } from 'semantic-ui-react';

const mapDispatchToProps = { setEntityAction, setEntitiesAction };

class Container1 extends BaseContainer {
  constructor(props) {
    super(props, Container1Controller);

    this.state = {
      entities: [],
      entity: null
    };
  }

  componentDidMount() {
    const { entities } = this.props;

    if(entities) this.setState({ entities: entities.all });
  }

  componentWillReceiveProps(nextProps) {
    const { entities } = nextProps, prevEntities = this.props.entities;

    if(!isequal(entities, prevEntities)) this.setState({ entities: entities.all });
  }

  renderEntities() {
    const { entities } = this.state;
    const { handleSelectToState, handleSelectToStore } = this.controller;

    // return entities.map(entity => <div key={entity.id} onClick={() => handleSelectToState(entity)}>{entity.nameAndAge}</div>)
    return entities.map(entity => <div key={entity.id} onClick={() => handleSelectToStore(entity)}>{entity.nameAndAge}</div>)
  }

  render() {
    return (
      <Container text>
        <br/>
        CONTAINER 1
        <br/>
        <br/>
        {this.renderEntities()}
        <br/>
        <Button onClick={this.controller.handleDownloadEntity}>Download another entity</Button>
        <Link to='/container2'>Container 2</Link>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    entitiy: state.entities.current,
    entities: state.entities.all
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container1);