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

  sendComment(event) {
    event.preventDefault();

    const { addComment, id } = this.props;
    const { commentText } = this.state;

    if (!id) {
      return;
    }

    addComment({ commentText, id });
    this.setState({ commentText: '' });
  }

  render() {
    const { commentText } = this.state;

    return (
      <form className="add-comment-container"
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
