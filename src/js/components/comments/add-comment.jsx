import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';

import { addComment, changeNumberOfComment } from '../../actions/comment';

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentText: ''
    };

    this.sendComment = this.sendComment.bind(this);
  }

  componentDidMount() {
    document.querySelector('#add-comment-form').onkeydown = event => {
      const codeOfEnterKey = 13,
        { ctrlKey, keyCode } = event,
        isEnterKey = keyCode === codeOfEnterKey;

      if (ctrlKey && isEnterKey && event.target.value) {
        this.sendComment(event);
      }

      if (!ctrlKey && isEnterKey) {
        event.preventDefault();
      }
    };
  }

  sendComment(event) {
    event.preventDefault();

    const { addComment, id } = this.props,
      { commentText } = this.state;

    if (!id) {
      return;
    }

    addComment({ commentText, id });
    this.setState({ commentText: '' });
  }

  render() {
    const { commentText } = this.state;

    return (
      <form id="add-comment-form" className="add-comment-container"
        onSubmit={this.sendComment}>
        <Input required={true} value={commentText}
          placeholder="enter comment..."
          onChange={event => this.setState({ commentText: event.target.value })}/>
      </form>
    );
  }
}

const mapState = ({ active: { id } }) => ({ id }),
  mapDispatch = dispatch => ({
    addComment: ({ commentText, id }) => {
      dispatch(addComment({ commentText, id }));
      dispatch(changeNumberOfComment(id));
    }
  });

export default connect(mapState, mapDispatch)(Items);
