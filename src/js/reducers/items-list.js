const defaultItemsList = [];
const itemsList = (state = defaultItemsList, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_NEW_ITEM':
    {
      const { title, id } = payload;

      return [
        ...state,
        {
          id,
          title,
        },
      ];
    }
    case 'DELETE_ITEM':
    {
      const { id } = payload;
      const newState = state.filter(item => item.id !== id);

      return newState;
    }
    default:
      return [...state];
  }
};

export default itemsList;
