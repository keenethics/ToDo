import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'reactstrap';

import { addNewItem, changeActiveItem, inputTitle } from '../../actions/item';
import { commentTemplate } from '../../actions/comment';

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.addNewItem = this.addNewItem.bind(this);
  }

  addNewItem(event) {
    event.preventDefault();

    const { addNewItem, itemsList, createTemplateForComment, title } = this.props;
    const indexOfLastItem = itemsList.length ? itemsList.length - 1 : 0;
    const lastItem = itemsList[indexOfLastItem];
    const { id = 0 } = lastItem || {};
    const newId = id + 1;

    this.props.inputTitle('');

    addNewItem({ title, id: newId });
    createTemplateForComment(newId);
  }

  render() {
    const { title } = this.props;

    return (
      <form id="add-item-form" onSubmit={this.addNewItem} className="add-item-container col">
        <Input
          className="add-item-container__text-filed"
          placeholder="Type name here..."
          required
          value={title}
          onChange={event => this.props.inputTitle(event.target.value)}
        />
        <Button className="add-item-container__add-btn" color="primary" type="submit">Add New</Button>
      </form>
    );
  }
}

const mapState = ({ itemsList, input: { itemTitle } }) => ({ itemsList, title: itemTitle });
const mapDispatch = dispatch => ({
  addNewItem: title => dispatch(addNewItem(title)),
  createTemplateForComment: (id) => {
    dispatch(commentTemplate(id));
    dispatch(changeActiveItem(id));
  },
  inputTitle: text => dispatch(inputTitle(text)),
});

export default connect(mapState, mapDispatch)(AddItem);
