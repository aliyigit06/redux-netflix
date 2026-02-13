import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { Link } from "react-router-dom";
import { baseImgUrl } from "../../utils/constants";
import { GoBookmarkSlashFill as Remove } from "react-icons/go";
import { toggleWatchList } from "../../redux/actions";

const WatchList = () => {
  const { isLoading, error, list } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleRemove = (movie) => {
    dispatch(toggleWatchList(movie, false));
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-semibold">İzleme Listesi</h1>

      <div className="my-10">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : list.length < 1 ? (
          <div className="text-center text-zinc-400 my-10">Henüz listeye hiç film eklenmedi</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 gap-y-10 my-10">
            {list.map((movie) => (
              <div className="relative">
                <button
                  onClick={() => handleRemove(movie)}
                  className="absolute top-3 end-3 bg-blue-500 p-3 rounded hover:bg-blue-600 cursor-pointer transition z-10 shadow"
                >
                  <Remove />
                </button>

                <Link to={`/movie/${movie.id}`}>
                  <img src={baseImgUrl + movie.poster_path} className="rounded" />
                </Link>

                <h1 className="text-xl text-center font-semibold mt-3">{movie.title}</h1>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchList;