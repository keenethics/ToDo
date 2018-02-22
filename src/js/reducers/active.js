const defaultActive = { id: 0 },
  active = (state = defaultActive, action) => {
    const { type, payload } = action;

    switch (type) {
    case 'CHANGE_ACTIVE_ITEM':
    {
      const { id } = payload;

      return {
        id
      };
    }
    default:
      return {
        ...state
      };
    }
  };

export default active;
