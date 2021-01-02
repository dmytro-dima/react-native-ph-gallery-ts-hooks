import * as types from "./types/actions-types";
import { AppAction } from "./types/actions-types";
import { API_URL } from "./fetch-url";

export const fetchImages = (dispatch: any) => {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data: []) => dispatch(setImages(data)))
    .catch((error) => {
      dispatch(fetchFailed(error.message));
    });
};

const fetchFailed = (errMess: string): AppAction => ({
  type: types.FETCH_FAILED,
  payload: errMess,
});

const setImages = (images: []): AppAction => ({
  type: types.SET_IMAGES,
  payload: images,
});
