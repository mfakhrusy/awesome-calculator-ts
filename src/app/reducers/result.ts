import { RootState } from './state';
import { ResultActions } from 'app/actions/result';
import { ActionTypes } from 'app/actions/actionTypes';

const initialState = 50;

export const resultReducers = (state = initialState, action: ActionTypes): RootState.ResultState => {
  switch (action.type) {
    case ResultActions.Type.UPDATE_RESULT:
      return action.payload;
    default:
      return state;
  }
}
