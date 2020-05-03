import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    val: "",
  }

  repetir = (e) =>{
    this.setState({
      val: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={this.repetir} placeholder="Empieza a escribir algo" />
    <p className="repeater">{this.state.val}</p>
      </div>
    );
  }
}

export default App;
