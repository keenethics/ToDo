const defaultInput = { textComment: '', itemTitle: '' };

const input = (state = defaultInput, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INPUT_COMMENT':
      return { ...state, textComment: payload.text };
    case 'INPUT_TITLE':
      return { ...state, itemTitle: payload.text };
    default:
      return state;
  }
}

export default input;
