// index.js

import * as actionType from './ActionType';

export const addCounter = ()=> {
  return {
    type: actionType.ADD_COUNTER,
    payload: 1
  }
    
};

export const removeCounter = () => ({
    type: actionType.REMOVE_COUNTER,
    payload: 1
});