import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddComment from './add-comment';
import CommentView from './comment-view';

class Comments extends Component {
  get comments() {
    const { itemComments: { comments } } = this.props;

    return comments.map((comment, index) => <CommentView {...comment} key={`${index}-comment`}/>);
  }

  render() {
    const { id } = this.props.active;

    return (
      <div className="comments-container col-md-5 col-sm-12 col-12">
        <h2>Comments #{id || ''}</h2>
        <div className="comments-list-container">
          {this.comments}
        </div>
        <AddComment />
      </div>
    );
  }
}

const chooseActive = ({ active: { id }, commentsForAllItem }) => commentsForAllItem.find(itemComments => itemComments.id === id),
  mapState = state => ({
    active: state.active,
    itemComments: chooseActive(state)
  });

export default connect(mapState)(Comments);
