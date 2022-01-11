import SearchForm from './components/SearchForm.js'
import Card from './components/Card.js'
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [trendQuery, setTrendQuery] = useState([]);
  const [loading, setLoading] = useState(true);
  function onChange(event){
    setSearchText(event.target.value);
  }

  function onClick(event){
    setDisplayText(searchText);
    event.preventDefault();
  }
  
  async function fetchAPI() {
    try {const response = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=9`)
    const data = await response.json();
    setTrendQuery(data.data);
    console.log(data.data[0]);
    setLoading(false);
  }
  catch (error){
    console.log(error);
  }
  }

    useEffect(async () => {
      fetchAPI();
    }, [])

//console.log("Hello", trendQuery[0].images.downsized_medium.url)
  return (
    <div className="App">
      <header className="App-header">
        <p>Search for a gif:</p>
        <SearchForm onClick={onClick} onChange={onChange} />
      </header>
      <main>
        {
        !loading ? trendQuery.map((data) => {return <Card url={data}/>})
        : <p>Didn't work</p>
        }
      </main>
    </div>
  );
}

export default App;
