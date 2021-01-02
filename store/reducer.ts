import { initialState } from "./initialState";
import { StateInterface } from "./types/interfaces";
import { AppAction } from "./types/actions-types";
import * as types from "./types/actions-types";

export const reducer = (
  state = initialState,
  action: AppAction
): StateInterface => {
  switch (action.type) {
    case types.SET_IMAGES:
      return { ...state, errMess: null, images: action.payload };
    case types.FETCH_FAILED:
      return { ...state, errMess: action.payload };
    default:
      return state;
  }
};
