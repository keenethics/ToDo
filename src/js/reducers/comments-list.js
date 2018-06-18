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
          comments,
        },
      ];
    }
    case 'NEW_COMMENT_TEMPLATE':
    {
      const { id } = payload;

      return [
        ...state,
        {
          id,
          comments: [],
        },
      ];
    }
    case 'DELETE_COMMENTS':
    {
      const { id } = payload;

      return state.filter(comments => comments.id !== id);
    }
    default:
      return [
        ...state,
      ];
  }
};

export default commentsForAllItem;
