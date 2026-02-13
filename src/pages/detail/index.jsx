import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Banner from "./banner";
import Content from "./content";
import Videos from "./videos";
import Loader from "../../components/loader/index";
import Error from "../../components/error/index";
import Actors from "./actors";
import Buttons from "./buttons";

const Detail = () => {
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const params = {
      append_to_response: "credits,videos",
    };

    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err));
  }, []);

  if (error) return <Error message={error} />;

  if (!movie) return <Loader />;

  return (
    <div>
      <Buttons movie={movie} />
      <Banner movie={movie} />
      <Content movie={movie} />
      <Actors cast={movie.credits.cast} />
      <Videos videos={movie.videos.results} />
    </div>
  );
};

export default Detail;