import {SET_VISIBILITY_FILTER} from '../actions/action-types';

const visibilityFilter = (state = 'all', action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_VISIBILITY_FILTER:
      return payload.filter;
    default:
      return state;
  }
};

export default visibilityFilter;