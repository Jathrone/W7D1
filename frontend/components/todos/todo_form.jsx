import React from "react";

const initialState = {
  id: new Date().getTime(),
  title: '',
  body: ''
}

class TodoForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = initialState
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>ADD TO-DO:</h3>
        <label htmlFor="title">Title:</label>
        <input 
          type="text"
          id="title"
          value={this.state.title}
          onChange={this.updateTitle}/>
        <br/>
        <label htmlFor="body">Body:</label>
        <input 
          type="text"
          id="body"
          value={this.state.body}
          onChange={this.updateBody}/>
        <br/>
        <input type="submit" value="Add Task"/>
      </form>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state)
    this.resetState()
  }

  resetState() {
    this.setState(initialState)
  }

  updateBody(e) {
    this.setState({body: e.target.value})
  }

  updateTitle(e) {
    this.setState({title: e.target.value})
  }
}

export default TodoForm;