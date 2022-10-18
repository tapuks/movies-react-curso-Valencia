import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import { Results } from "./components/Results";

import { useState } from "react";

function App() {
  const [movie, setSMovie] = useState("");
  return (
    <div className="App">
      <Title>Movies App</Title>
      <div className="center">
        <SearchForm movie={(data) => setSMovie(data)} />
        <Results movie={movie} />
      </div>
    </div>
  );
}

export default App;
