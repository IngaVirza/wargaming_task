import { createAction } from 'redux-actions';
import { actionWidget } from './index.jsx';

export const setSelectedItems = createAction(actionWidget.SET_SELECTED_ELEMENTS);
export const setSelectedItemsAction = (items) => (dispatch) => {
  dispatch(setSelectedItems(items));
};

export const setSavedItems = createAction(actionWidget.SET_SAVED_ELEMENTS);
export const setSavedItemsAction = (items) => (dispatch) => {
  dispatch(setSavedItems(items));
};

export const setPreviousSavedItems = createAction(actionWidget.SET_PREVIOUS_SAVED_ELEMENTS);
export const setPreviousSavedItemsAction = (items) => (dispatch) => {
  dispatch(setPreviousSavedItems(items));
};

export const saveWidget = createAction(actionWidget.SAVE_WIDGET_VALUE);
export const saveWidgetAction = () => (dispatch, getState) => {
  const store = getState();
  const {
    selectedItems: {selected}, savedItems: {saved},
  } = store;
  dispatch(setSelectedItemsAction(selected));
  dispatch(setSavedItemsAction(selected));
  dispatch(setPreviousSavedItemsAction(saved));
};