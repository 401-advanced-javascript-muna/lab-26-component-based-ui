import React from 'react';

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {counter:0}
  
    }
  
    handleClickIncrese = e => {
      e.preventDefault();
      let counter = this.state.counter
      counter++;
      this.setState({ counter });
    }
    handleClickDecrease = e => {
      e.preventDefault();
      let counter = this.state.counter
      counter--;
      this.setState({ counter });
    }
  
    render() {
      return ( //jsx 
        <section>
          <h3>{this.state.counter}</h3>
          <section>
          <button onClick={this.handleClickIncrese}>click for increase </button>
          </section>
          <section>
          <button onClick={this.handleClickDecrease}>click for decrease</button>
          </section>
        </section>
      )
    }
  }

export default Main;