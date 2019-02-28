import { SHOW_LOADING, CLOSE_LOADING } from "../../actions";

const INITIAL_STATE = {
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SHOW_LOADING: return { ...state, isLoading: true };
    case CLOSE_LOADING: return { ...state, isLoading: false };
    
    default: return state;
  }
}