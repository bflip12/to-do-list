import React, { Component } from "react";
import ToDoPresentation from '../presentations/ToDoPresentation';
import FormPresentation from '../presentations/FormPresentation';
import Styled from "styled-components";
const StyledHeader = Styled.h1`
  font: 200 42px/1.5 Helvetica, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #1F2F5B;
`;

const StyledWrapperDiv = Styled.div`
  width: 100%;
`;

class ToDoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      editMode: false,
      editingIndex: -1,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onChange(event) {
    this.setState({ term: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault()
    if(!this.state.editMode){
      this.setState({
        term: '',
        items: [...this.state.items, this.state.term]
      });
    }
    else {
      let tempItems = [...this.state.items];
      tempItems[this.state.editingIndex] = this.state.term;
      this.setState({
        term: '',
        items: tempItems,
        editMode: false,
        editingIndex: -1,
      });
    }
  }

  onDelete(index) {
    this.setState(prevState => ({
      items: prevState.items
      .slice(0, index)
      .concat(prevState.items.slice(index + 1))
    }));
  }

  onEdit(index) {
    console.log("editing" + index)
    this.setState(prevState => ({
      editMode: !prevState.editMode,
      term: prevState.items[index],
      editingIndex: index
    }));
  }

  render() {
    return (
      <div>
        <StyledHeader>To Do List</StyledHeader>

        <FormPresentation onSubmit={this.onSubmit} onChange={this.onChange} term={this.state.term}/>
        <StyledWrapperDiv>
          <ToDoPresentation items={this.state.items} onEdit={this.onEdit} onDelete={this.onDelete} />
        </StyledWrapperDiv>
      </div>
    );
  }
}

export default ToDoContainer;
