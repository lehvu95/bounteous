import React from 'react';
import logo from './logo.svg';
import './App.css';

// create mock data to use based off of readme
// create getTVShowNames function which filters by input string
// -> convert name to lowercase 
// -> convert input string to lowercase
// -> search lowercase name for input string
// -> use filter function
// -> sort array in ascending order by name
// -> print list in console
// create search results component
// -> image.medium for image
// -> filter results by shows that have an image
// -> see readme for sample output
// use axios to perform fetch
// create form for search input
// -> check codesandbox for solution with state
// -> check github for solution with reducer

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
