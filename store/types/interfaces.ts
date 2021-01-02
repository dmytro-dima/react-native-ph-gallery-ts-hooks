import * as types from "./actions-types";

interface Image {
  id: string;
  urls?: any;
  user: any;
  alt_description?: string;
}

export interface StateInterface {
  errMess: string | null;
  images: Image[];
}

export interface setImagesAction {
  type: typeof types.SET_IMAGES;
  payload: [];
}

export interface failedFetchAction {
  type: typeof types.FETCH_FAILED;
  payload: string;
}
