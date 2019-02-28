import { SET_ENTITY, SET_ENTITIES } from "../../actions";

const INITIAL_STATE = {
  all: null,
  current: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_ENTITY: return { ...state, current: action.data };
    case SET_ENTITIES: return { ...state, all: action.data };
    
    default: return state;
  }
}