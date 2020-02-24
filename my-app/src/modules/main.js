import React from 'react';

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          counter:0,
          polarity:''
  
    }
    }
    handleClickIncrese = e => {
      e.preventDefault();
      let counter = this.state.counter
      counter++;
      this.setState({ counter });
      this.handlePolarity(counter)
    }
    handleClickDecrease = e => {
      e.preventDefault();
      let counter = this.state.counter;
      counter--;
      this.setState({ counter });
      this.handlePolarity(counter)
    }
    handlePolarity=counter=>{
        if (counter <0 ){
         
         let polarity = '-'
          this.setState({polarity})};
        if (counter >=0 ){
          let polarity = '+'
          this.setState({polarity})};


    }
  
    render() {
      return ( //jsx 
        <section>
          <h3>{this.state.counter}</h3>
          <section>
          <section>
          <h3>polarity  {this.state.polarity}</h3>
          {this.handlePolarity}
          </section>
          <button onClick={this.handleClickIncrese}> Increase </button>
          </section>
          <section>
          <button onClick={this.handleClickDecrease}> Decrease</button>
          </section>
        </section>
      )
    }
  }

export default Main;