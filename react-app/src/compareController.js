import React from 'react';
import {COMPARE_ACTIONS} from './constants';
const {ADD_COMPARE, CLEAR_COMPARE, REMOVE_COMPARE} = COMPARE_ACTIONS;


export const CompareContext = React.createContext([]);

export const addCompare = (item) => ({type: ADD_COMPARE, item});
export const removeCompare = (index) => ({type: REMOVE_COMPARE, index});
export const clearCompare = () => ({type: CLEAR_COMPARE});

export function compareReducer (compare, action) {
  switch (action.type) {
    case ADD_COMPARE:
      if(compare.length === 3) return compare;
      return [...compare, action.item];
    case REMOVE_COMPARE:
      const newCompare = [...compare];
      newCompare.splice(action.index, 1);
      return newCompare;
    case CLEAR_COMPARE:
      return [];
    default:
      return state;
  }
}
