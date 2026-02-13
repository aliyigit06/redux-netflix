import ActionTypes from "../actionType";
import api from "../../utils/api";

// kullanıcı id'si
const account_id = "22689350";

// listedeki filmleri alığ reducer'a aktaran thunk aksiyonu
export const getWatchList = () => async (dispatch) => {
  dispatch({ type: ActionTypes.LIST_LOADING });

  api
    .get(`/account/${account_id}/watchlist/movies`)
    .then((res) => dispatch({ type: ActionTypes.LIST_SUCCESS, payload: res.data.results }))
    .catch((err) => dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message }));
};

// izleme listene eleman ekleme/çıkarma yapan thunk aksiyonu
export const toggleWatchList = (movie, isAdd) => async (dispatch) => {
  // body içeriğini hazırla
  const body = {
    media_type: "movie",
    media_id: movie.id,
    watchlist: isAdd,
  };

  // api'a istek at
  api
    .post(`account/${account_id}/watchlist`, body)
    .then(() => {
      // ekleme/çıkarma durumuna göre reducer'a haber ver
      isAdd
        ? dispatch({ type: ActionTypes.ADD_TO_LIST, payload: movie })
        : dispatch({ type: ActionTypes.REMOVE_FROM_LIST, payload: movie });
    })
    .catch((err) => console.log(err));
};