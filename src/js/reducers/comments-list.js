const defaultCommentsForAllItem = [{ id: 0, comments: [] }];
const commentsForAllItem = (state = defaultCommentsForAllItem, action) => {
  const { type, payload } = action;

  switch (type) {
  case 'ADD_COMMENT':
  {
    const { commentText, id } = payload;
    const itemComments = state.find(comment => comment.id === id);
    const notChangedComments = state.filter(comments => comments.id !== id);
    const comments = [...itemComments.comments, { commentText }];

    return [
      ...notChangedComments,
      {
        id,
        comments
      }
    ];
  }
  case 'NEW_COMMENT_TEMPLATE':
  {
    const { id } = payload;
    const tmpState = state.slice(0);
    const existedTemplate = tmpState.find(comments => comments.id === id);
    const currentTemplateIndex = tmpState.lastIndexOf(existedTemplate);
    const isExistComments = Boolean(existedTemplate);

    if (isExistComments) {
      tmpState.splice(currentTemplateIndex, 1);
    }

    return [
      ...tmpState,
      {
        id,
        comments: []
      }
    ];
  }
  default:
    return [
      ...state
    ];
  }
};

export default commentsForAllItem;
