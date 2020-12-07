import * as React from 'react';


type Appprops = {
    text : string;
}

function App(props) {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>{props.text}</h1>
          </a>
        </header>
      </div>
    );
  }
  export default App;