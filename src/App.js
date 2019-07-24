import React, { Component } from 'react';
import Items from "./components/Items";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      submit: "",
      items: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    function isItemIdIn(id, arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
          return true;
        }
      }
      return false;
    }
    
    let itemId = 0;

    while (isItemIdIn(itemId, this.state.items)) {
      itemId += 1;
    }

    this.setState({
      input: "",
      items: [...this.state.items, {id: itemId, title: this.state.input, description: "Description"}]
    })
  }

  render() {
    return (
      <div className="App">
        <Form input={this.state.input} inputChange={this.handleChange} onSubmit={this.handleSubmit} />
        <h1>{this.state.submit}</h1>
        <Items items={this.state.items} />
      </div>
    );
  }
}

export default App;
