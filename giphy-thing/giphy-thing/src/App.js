import SearchForm from "./components/SearchForm.js";
import Card from "./components/Card.js";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [gifQuery, setGifQuery] = useState([]);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  function onChange(event) {
    setSearchText(event.target.value);
    
      console.log(!event.target.value)
    
  }

  function onClick(event) {
    setHasClicked(true);
    setDisplayText(searchText);
    if (!displayText.trim()){
      fetchAPI();
    }
    event.preventDefault();
  }
  async function fetchAPI() {
    try {
      const response = await fetch(
        hasClicked
          ? `http://api.giphy.com/v1/gifs/${displayText ? `search?q=${displayText}` : "random?"
            }&api_key=${process.env.REACT_APP_API_KEY}&limit=9`
          : `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=9`
      );

      console.log(displayText);
      const data = await response.json();
      if (!data.data.length){
        data.data = [data.data];
      }
      setGifQuery(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(async () => {
    fetchAPI();
  }, [displayText]); //holy shit this works way better than I thought it would

  return (
    <div className="App">
      <header className="App-header">
        <p>Search for a gif:</p>
        <SearchForm onClick={onClick} onChange={onChange} />
      </header>
      <main>
        {
        !loading ? (
          gifQuery.map((data) => {
            return <Card data={data} />;
          })
        ) : (
          <p>Didn't work</p>
        )}
      </main>
    </div>
  );
}

export default App;
