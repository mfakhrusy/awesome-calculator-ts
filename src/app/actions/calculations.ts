export namespace CalculationsActions {
  export enum Type {
    UPDATE_CALCULATIONS = 'UPDATE_CALCULATIONS'
  }

  export interface updateCalculations {
    type: Type.UPDATE_CALCULATIONS,
    payload: string[]
  }
}
