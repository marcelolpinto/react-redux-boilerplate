import BaseController from '../../BaseController';

export class Container1Controller extends BaseController {
  
  constructor({ getState, getProps, toState }) {
    super({ getState, getProps, toState });

    this.handleSelectToState = this.handleSelectToState.bind(this);
    this.handleSelectToStore = this.handleSelectToStore.bind(this);
    this.handleDownloadEntity = this.handleDownloadEntity.bind(this);
  }

  handleSelectToState(entity) {
    this.toState({ entity });
  }

  handleSelectToStore(entity) {
    const { setEntityAction } = this.getProps();

    setEntityAction(entity);
  }

  handleDownloadEntity() {
    const { entities, setEntitiesAction } = this.getProps();

    const newEntities = entities.add(dummyEntity());
    setEntitiesAction(newEntities);
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

const dummyEntity = () => ({
  id: Math.round(Math.random() * 10000),
  name: `Dummy download ${Math.round(Math.random() * 1000)}`,
  age: Math.round(Math.random() * 50),
  favorite_color: ['blue', 'yellow', 'black'][Math.floor(Math.random() * 3)]
});