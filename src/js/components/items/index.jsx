import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddItem from './add-item';
import ItemView from './item-view';

import { init } from '../../actions/item';

class Items extends Component {
  get items() {
    const { itemsList, commentsList } = this.props;

    return itemsList.map((item, index) => (
      <ItemView
        {...item}
        key={`${index}-item`}
        commentsCount={commentsList.find(({ id }) => id === item.id).comments.length}
      />
    ));
  }

  render() {
    const { id = 0 } = this.props.active;
    const { itemsList } = this.props;
    const activeItem = itemsList.find(item => item.id === id);
    const indexOfActiveItem = itemsList.lastIndexOf(activeItem);
    const heightOfItemContainer = 58;

    return (
      <div className="items-container col-md-5 col-sm-12 col-12">
        <h2>Items</h2>
        <AddItem />
        <div className="items-list-container">
          <div
            className="items-list-container__active-item"
            style={indexOfActiveItem !== -1 ? { transform: `translateY(${heightOfItemContainer * indexOfActiveItem}px` } : { display: 'none' }}
          />
          {this.items}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  itemsList: state.itemsList,
  commentsList: state.commentsForAllItem,
  active: state.active,
});
const mapDispatch = dispatch => ({
  getInitState: () => {
    dispatch(init());
  },
});

export default connect(mapState, mapDispatch)(Items);
