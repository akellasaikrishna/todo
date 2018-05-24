import React, { Component } from 'react';

class Todo extends Component {
  constructor(props){
    super(props);

    this.state = {
      userInput: '',
      list: []
    }
  }

changeUserInput(input){
  this.setState({
  userInput: input
  });
}

addToList(input){
  let listArray = this.state.list;
  listArray.push(input);
  this.setState({
    list: listArray
  })
}

  render() {
    return (
      <div className="container">
      <input onChnage={(e)=>this.changeUserInput(e.target.value)} value={this.state.userInput} type="text" />
      <button onClick={()=> this.addTodo(this.state.userInput)}>Enter</button>
      <form action={this.listArray.select()}>
        <select name="option">
        <option value="Completed">Completed</option>
        <option value="Active">Active</option>
        </select>
        <input type="submit" />
      </form>

      <ul>
        {this.state.list.map((val)=> <li>{val}</li>)}
      </ul>
      </div>

    );
  }
}

export default Todo;
