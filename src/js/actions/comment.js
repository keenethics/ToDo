export const addComment = ({ commentText = '', id = 0 }) => ({
  type: 'ADD_COMMENT',
  payload: { commentText, id },
});

export const commentTemplate = (id = 0) => ({
  type: 'NEW_COMMENT_TEMPLATE',
  payload: { id },
});

export const deleteComments = (id = 0) => ({
  type: 'DELETE_COMMENTS',
  payload: { id },
});

export const inputComment = (text = '') => ({
  type: 'INPUT_COMMENT',
  payload: { text },
})
