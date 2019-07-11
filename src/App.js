import React, { useState } from "react";
import "./App.css";
import { Numbers } from "./components/ButtonComponents/NumberButtons/Numbers";
import { Operators } from "./components/ButtonComponents/OperatorButtons/Operators";
import { Specials } from "./components/ButtonComponents/SpecialButtons/Specials";
import { Display } from "./components/DisplayComponents/Display";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  // const [totalDisplay, setTotalResult] = useState(0);
  // const [firstNumber, setFirstNumber] = useState(0);
  // const [operation, setOperation] = useState(0);
  // const [totalResult, setTotalResult] = useState(0);

  const [state, setState] = useState({
    // totalDisplay: 0,
    number: 0,
    operation: null,
    totalResult: 0
  });

  const buttonClick = firstNumber => {
    // setState().number(firstNumber);
    setState({ number: firstNumber });
  };

  const display = () => {
    // setState.totalResult = state.number;
    setState({ totalResult: state.number });
  };

  return (
    <div className="container">
      <h1>test</h1>

      <div className="App">
        <h1>{state.totalResult}</h1>
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Logo />
        <Display {...state} display={display} />
        <Numbers {...state} clickHandler={buttonClick} />
        <Operators {...state} />
        <Specials {...state} />
      </div>
    </div>
  );
}

export default App;
