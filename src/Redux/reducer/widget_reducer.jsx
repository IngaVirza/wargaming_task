/* eslint-disable import/prefer-default-export */
import { actionWidget } from '../action/index.jsx';

const initialState = {
  selectedItems: {
    selected: [],
  },
  savedItems: {
    saved: [],
  },
  previousSaveItems: {
    previousSaved: [],
  },
};

export const setSelectedElements = (state = initialState.selectedItems, action) => {
  switch (action.type) {
    case actionWidget.SET_SELECTED_ELEMENTS:
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
};

export const setSavedElements = (state = initialState.savedItems, action) => {
  switch (action.type) {
    case actionWidget.SET_SAVED_ELEMENTS:
      return {
        ...state,
        saved: action.payload,
      };
    default:
      return state;
  }
};

export const setPreviousSavedElements = (state = initialState.previousSaveItems, action) => {
  switch (action.type) {
    case actionWidget.SET_PREVIOUS_SAVED_ELEMENTS:
      return {
        ...state,
        previousSaved: action.payload,
      };
    default:
      return state;
  }
};