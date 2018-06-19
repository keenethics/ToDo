export const addNewItem = ({ title = 'Empty', id = 0 }) => ({
  type: 'ADD_NEW_ITEM',
  payload: { title, id },
});

export const deleteItem = (id = 0) => ({
  type: 'DELETE_ITEM',
  payload: { id },
});

export const changeActiveItem = (id = 0) => ({
  type: 'CHANGE_ACTIVE_ITEM',
  payload: { id },
});

export const init = () => ({
  type: 'INIT',
});
