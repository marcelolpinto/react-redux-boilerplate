import React from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

import BaseContainer from '../BaseContainer';
import { MainController } from '../controllers';
import { showLoadingAction, closeLoadingAction, setEntitiesAction } from '../actions';

const mapDispatchToProps = { showLoadingAction, closeLoadingAction, setEntitiesAction };

class Main extends BaseContainer {
  constructor(props) {
    super(props, MainController);
  }

  componentDidMount() {
    this.controller.fetch()
  }
  render() {
    return (
      <Container text>
        Main
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    entities: state.entities.all,
    loading: state.loading.isLoading
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);