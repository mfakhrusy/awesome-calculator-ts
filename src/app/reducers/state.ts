export interface RootState {
  calculations: RootState.CalculationsState,
  result: RootState.ResultState,
  router?: any;
}

export namespace RootState {
  export type CalculationsState = string[];
  export type ResultState = number;
}
