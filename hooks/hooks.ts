import { createContext } from "react";
import {StateInterface} from "../store/types/interfaces";

interface StateContext {
  state: StateInterface;
  dispatch: any;
}

export const ContextApp = createContext<StateContext>({
  state: {
    errMess: null,
    images: [],
  },
  dispatch: null,
});
