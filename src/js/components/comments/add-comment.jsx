import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';

import { addComment } from '../../actions/comment';
import { inputComment } from '../../actions/comment';

class Items extends Component {
  constructor(props) {
    super(props);

    this.sendComment = this.sendComment.bind(this);
  }

  sendComment(event) {
    event.preventDefault();

    const { addComment, id, text } = this.props;

    if (!id) {
      return;
    }

    addComment({ commentText: text, id });
    this.props.inputComment('');
  }

  render() {
    const { text } = this.props;

    return (
      <form
        className="add-comment-container"
        onSubmit={this.sendComment}
      >
        <Input
          required
          value={text}
          placeholder="enter comment..."
          onChange={event => this.props.inputComment(event.target.value)}
        />
      </form>
    );
  }
}

const mapState = ({ active: { id }, input: { textComment } }) => ({ id, text: textComment });
const mapDispatch = dispatch => ({
  addComment: ({ commentText, id }) => dispatch(addComment({ commentText, id })),
  inputComment: text => dispatch(inputComment(text)),
});

export default connect(mapState, mapDispatch)(Items);
