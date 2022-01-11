import SearchForm from './components/SearchForm.js'
import Card from './components/Card.js'
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState("");
  const [displayText, setDisplayText] = useState("");
  function onChange(event){
    setSearchText(event.target.value);
  }

  function onClick(event){
    setDisplayText(searchText);
    event.preventDefault();
  }
  
  

  return (
    <div className="App">
      <header className="App-header">
        <p>Search for a gif:</p>
        <SearchForm onClick={onClick} onChange={onChange} />
      </header>
      <main>
        <Card content={displayText}/>
      </main>
    </div>
  );
}

export default App;
