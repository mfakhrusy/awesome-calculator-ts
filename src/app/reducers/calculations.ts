import { RootState } from './state';
import { CalculationsActions } from 'app/actions/calculations';
import { ActionTypes } from 'app/actions/actionTypes';

const initialState = [''];

export const calculationsReducer = (state = initialState, action: ActionTypes): RootState.CalculationsState => {
  switch (action.type) {
    case CalculationsActions.Type.UPDATE_CALCULATIONS:
      return action.payload;
    default:
      return state;
  }
}
