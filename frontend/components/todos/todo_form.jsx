import React from "react";

const initialState = {
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
        <ul>
          {this.props.errors && this.props.errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
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
    this.props.createTodo(this.state).then( () => this.resetState() )
  }

  resetState() {
    this.setState(initialState)
    this.props.clearErrors()
  }

  updateBody(e) {
    this.setState({body: e.target.value})
  }

  updateTitle(e) {
    this.setState({title: e.target.value})
  }
}

export default TodoForm;