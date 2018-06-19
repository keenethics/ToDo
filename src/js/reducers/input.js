const defaultInput = { text: '' };

const input = (state = defaultInput, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INPUT_COMMENT':
      return { ...payload }
    default:
      return state;
  }
}

export default input;
