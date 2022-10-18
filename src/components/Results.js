import "./styleResults.css";

export const Results = (props) => {
  if (props.movie.Response == "False") {
    return <p>{props.movie.Error}</p>;
  }
  return (
    <div className="container-results">
      {props.movie.Search?.map((movie) => {
        return <Card info={movie} />;
      })}
    </div>
  );
};

const Card = (props) => {
  const { Title, Poster, Type, Year } = props.info;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={Poster} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left"></div>
          <div className="media-content">
            <p className="title is-4">{Title}</p>
          </div>
        </div>

        <div className="content">
          {Type}

          <br />
          <time datetime="2016-1-1">{Year}</time>
        </div>
      </div>
    </div>
  );
};
