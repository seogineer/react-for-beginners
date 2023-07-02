import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  });
  console.log(movie);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieDetail
          key={movie.id}
          coverImg={movie.medium_cover_image}
          description={movie.description_full}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          runtime={movie.runtime}
          genres={movie.genres}
        />
      )}
    </div>
  );
}

export default Detail;
