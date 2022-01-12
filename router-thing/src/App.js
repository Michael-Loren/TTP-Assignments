import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Other from "./components/Other";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello!</h1>
      
        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Other" element={<Other content="sup"/>} />
          </Routes>
          <nav>
        <Link to="/Home" >Home </Link>
        <br />
        <Link to="/Other" >Other</Link>
        </nav>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
