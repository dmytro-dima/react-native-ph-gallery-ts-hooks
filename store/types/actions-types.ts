import { setImagesAction, failedFetchAction } from "./interfaces";

export const FETCH_FAILED = "FETCH_FAILED";
export const SET_IMAGES = "SET_IMAGES";

export type TaskActionTypes = setImagesAction | failedFetchAction;

export type AppAction = TaskActionTypes;
