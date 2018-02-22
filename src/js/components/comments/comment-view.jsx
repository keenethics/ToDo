import React from 'react';

const CommentView = ({ commentText }) => <div className="comment-container">
  <div className="avatar-container"></div>
  <div className="comment-text-container">
    {commentText}
  </div>
</div>;

export default CommentView;
