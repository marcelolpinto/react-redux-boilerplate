export const SET_ENTITY = 'SET_ENTITY';
export const SET_ENTITIES = 'SET_ENTITIES';

export const setEntityAction = entity => ({
  type: SET_ENTITY,
  data: entity
});

export const setEntitiesAction = entities => ({
  type: SET_ENTITIES,
  data: entities
});