import { useState } from "react";
import { API_KEY, BASE_URI_OMDB } from "../Constants";

export const SearchForm = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${BASE_URI_OMDB}?apikey=${API_KEY}&s=${search}`)
      .then((res) => res.json())
      .then((data) => props.movie(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Find a movie"
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <a className="button is-info" onClick={handleSubmit}>
            Search
          </a>
        </div>
      </div>
    </>
  );
};
