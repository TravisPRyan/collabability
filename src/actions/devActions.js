import {
  GET_DEVS,
  ADD_DEV,
  DELETE_DEV,
  SET_LOADING,
  DEVS_ERROR
} from "./types";

//get devs
export const getDevs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/devs");
    const data = await res.json();

    dispatch({
      type: GET_DEVS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: DEVS_ERROR,
      payload: error.response.statusText
    });
  }
};

//add dev
export const addDev = dev => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/devs", {
      method: "POST",
      body: JSON.stringify(dev),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_DEV,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: DEVS_ERROR,
      payload: error.response.statusText
    });
  }
};

//delete dev
export const deleteDev = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/devs/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_DEV,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: DEVS_ERROR,
      payload: error.response.statusText
    });
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
