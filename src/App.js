import React, { Component } from 'react';
import Items from "./components/Items";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      items: [
        {
          id: 1,
          title: "Item 1",
          description: "Description item 1"
        },
        {
          id: 2,
          title: "Item 2",
          description: "Description item 2"
        }
      ]
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Form input={this.state.input} inputChange={this.handleChange} />
        <Items items={this.state.items} />
      </div>
    );
  }
}

export default App;
