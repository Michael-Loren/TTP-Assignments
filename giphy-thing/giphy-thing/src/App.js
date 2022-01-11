import SearchForm from './components/SearchForm.js'
import Card from './components/Card.js'
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState("");

  function onChange(event){
    setSearchText(event.target.value);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>Search for a gif:</p>
        <SearchForm onChange={onChange} />
      </header>
      <main>
        <Card content={searchText}/>
      </main>
    </div>
  );
}

export default App;
