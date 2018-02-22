const defaultCommentsForAllItem = [{ id: 0, comments: [] }],
  commentsForAllItem = (state = defaultCommentsForAllItem, action) => {
    const { type, payload } = action;

    switch (type) {
    case 'ADD_COMMENT':
    {
      const { commentText, id } = payload,
        itemComments = state.find(comment => comment.id === id),
        notChangedComments = state.filter(comments => comments.id !== id),
        comments = [...itemComments.comments, { commentText }];

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
      const { id } = payload,
        tmpState = state.slice(0),
        existedTemplate = tmpState.find(comments => comments.id === id),
        currentTemplateIndex = tmpState.lastIndexOf(existedTemplate),
        isExistComments = Boolean(existedTemplate);

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
