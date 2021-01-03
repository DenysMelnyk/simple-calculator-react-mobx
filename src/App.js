import React from 'react';
import './App.css';
import Container from "./UI/Container/Container";
import Calculator from "./components/Calculator/Calculator";

const App = ({state, buttons}) => {
  return (
    <div className="App">
        <Container>
            <h2>Simple Calculator React App + MobX</h2>
          <Calculator
              calcStore={state}
              calcButtons={buttons}
          />
        </Container>
    </div>
  );
}

export default App;
