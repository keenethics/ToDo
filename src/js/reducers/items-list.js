const defaultItemsList = [],
  itemsList = (state = defaultItemsList, action) => {
    const { type, payload } = action;

    switch (type) {
    case 'ADD_NEW_ITEM':
    {
      const { title, id } = payload,
        numberOfComments = 0;

      return [
        ...state,
        {
          id,
          title,
          numberOfComments
        }
      ];
    }
    case 'DELETE_ITEM':
    {
      const { id } = payload,
        newState = state.filter(item => item.id !== id);

      return newState;
    }
    case 'INCREASE_NUMBER_OF_COMMENT':
    {
      const { id } = payload,
        tmpState = state.slice(0),
        currentItem = tmpState.find(item => item.id === id),
        indexOfCurrentItem = tmpState.lastIndexOf(currentItem),
        numberOfComments = ++currentItem.numberOfComments,
        updatedItem = {
          ...currentItem,
          numberOfComments
        };

      tmpState.splice(indexOfCurrentItem, 1, updatedItem);

      return tmpState;
    }
    default:
      return [
        ...state
      ];
    }
  };

export default itemsList;
