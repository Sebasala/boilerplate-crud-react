import React, { Component } from 'react';

//Components
import Items from "./components/Items";
import Form from "./components/Form";

//Functions
import availableId from "./functions/availableId";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      textarea: "",
      items: []
    }
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleTextareaChange = (event) => {
    this.setState({
      textarea: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    let itemId = availableId(this.state.items);

    if (this.state.input.length > 0) {
      this.setState({
        input: "",
        textarea: "",
        items: [
          ...this.state.items, 
          {
            id: itemId, 
            title: this.state.input, 
            description: this.state.textarea
          }
        ]
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Form 
          input={this.state.input} 
          inputChange={this.handleInputChange} 
          textarea={this.state.textarea} 
          textareaChange={this.handleTextareaChange} 
          onSubmit={this.handleSubmit} 
        />
        <Items items={this.state.items} />
      </div>
    );
  }
}

export default App;
