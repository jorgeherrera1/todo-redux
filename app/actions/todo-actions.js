import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from './action-types';

let nextId = 0;

export function addTodo(text) {
  const id = nextId++;

  console.log(`action: add todo id=>${id} text=>${text}`);

  return {
    type: ADD_TODO,
    payload: {id, text}
  }
}

export function toggleTodo(id) {
  console.log(`action: toggle todo id=>${id}`);

  return {
    type: TOGGLE_TODO,
    payload: {id}
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: {filter}
  }
}