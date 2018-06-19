import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

import { deleteItem, changeActiveItem } from '../../actions/item';
import { deleteComments } from '../../actions/comment';

class ItemView extends Component {
  constructor(props) {
    super(props);

    this.deleteItem = this.deleteItem.bind(this);
    this.setActiveItem = this.setActiveItem.bind(this);
  }

  setActiveItem() {
    const { id, changeActiveItem } = this.props;

    changeActiveItem(id);
  }

  deleteItem(event) {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    const {
      id,
      deleteItem,
      changeActiveItem
    } = this.props;

    deleteItem(id);
    changeActiveItem(0);
  }

  render() {
    const { title, commentsCount } = this.props;

    return (
      <div
        className="item-container layout layout-align-space-between"
        onClick={this.setActiveItem}
      >
        <div className="item-info layout layout-align-space-between">
          {title}
          <div className="item-info__number-of-comments">
            {commentsCount}
          </div>
        </div>
        <Button outline color="danger" onClick={this.deleteItem}>
          Delete
        </Button>
      </div>
    );
  }
}

const mapState = ({ itemsList }) => ({ itemsList });
const mapDispatch = dispatch => ({
  deleteItem: (id) => {
    dispatch(deleteItem(id));
    dispatch(deleteComments(id));
  },
  changeActiveItem: (id) => {
    dispatch(changeActiveItem(id));
  },
});

export default connect(mapState, mapDispatch)(ItemView);
