import {
  GET_DEVS,
  ADD_DEV,
  DELETE_DEV,
  SET_LOADING,
  DEVS_ERROR
} from "../actions/types";

const initialState = {
  devs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEVS:
      return {
        ...state,
        devs: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
