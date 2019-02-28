import BaseController from '../../BaseController';
import { Entities } from '../../models';

export class MainController extends BaseController {
  
  constructor({ getState, getProps, toState }) {
    super({ getState, getProps, toState });

    this.fetch = this.fetch.bind(this);
  }

  async fetch() {
    const { showLoadingAction, closeLoadingAction, setEntitiesAction } = this.getProps();

    showLoadingAction();
    const promise = await this.later(3000);

    setEntitiesAction(new Entities(dummyEntities));
    closeLoadingAction();
  }

  later(delay) {
    return new Promise(function(resolve) {
      setTimeout(resolve, delay);
    });
  }

}

const dummyEntities = [
  {
    _id: 1,
    name: 'Marcelo',
    age: 28,
    favorite_color: 'red'
  },
  {
    _id: 2,
    name: 'Marcela',
    age: 24,
    favorite_color: 'green'
  }
];