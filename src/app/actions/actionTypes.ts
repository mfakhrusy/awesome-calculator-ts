import { CalculationsActions } from 'app/actions/calculations';
import { ResultActions } from 'app/actions/result';

export type ActionTypes =
  | CalculationsActions.updateCalculations
  | ResultActions.updateResult;
