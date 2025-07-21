import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {   //for state we can pass only two things, that is null or object,...
      count: 0,
      count1: 0
    };
  }

// in class whenever you want to declare variable, you can use directly variable name,..
  handleClick = () => {
    //setState is used to update the state of a class component
    // setState is take only object,..
    this.setState({ count: this.state.count + 1 });   //we use object inside setState method bcz, state value is a object that have count keyword with value,.
    this.setState({ count: this.state.count + 8 });    //only one will be execute (that last one, if the last one is taking time as compare to second last then second last will be execute), because setState is a asyncronous in nature
    this.setState({ count: this.state.count + 9 });
  };
  handleClick1=()=>{
        this.setState({count:this.state.count-1})
  }
    handleClick2=()=>{
        this.setState({count:this.state.count=0})
  }


  render() {
    comsole.log("re-render");
    console.log(this.state.count);   // here i'm checking it in console, it will execute every time when user click the button,...
    return (   //inside this return all are JSX
      <div>

      {/* here i'm accepting count(key) value, which is present in state, which have object */}
      {/*jsx expression "{}" : it is used to show/display the variables on the UI,..    ( &{}=={} )*/}
        <h1 style={{color: this.state.count>0?"green":"red"}}>{this.state.count}</h1>    

        {/* handleClick is also a current_object present in class directly, so we have to access with this keyword,. */}
        <button onClick={this.handleClick}>Increase</button>
        <button onClick={this.handleClick1}>Decrease</button>
        <button onClick={this.handleClick2}>Reset</button>
      </div>
    );
  }
}

// 🔸 Jab this likhte ho to:

                  // Tum React ko batate ho ki:
                  // “Main is class (component) ke andar ki cheez access kar raha hoon.”



// Hooks are the predefined function block of code in React,. 
// Hooks are use to achieve inbuild features of class-based component into function based conponent,.

