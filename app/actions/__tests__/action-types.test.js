import * as types from '../action-types';
import * as actions from '../todo-actions';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: types.ADD_TODO,
      payload: {id: 0, text}
    };

    expect(actions.addTodo(text)).toEqual(expectedAction);
  })
})