export namespace ResultActions {
  export enum Type {
    UPDATE_RESULT = 'UPDATE_RESULT'
  }

  export interface updateResult {
    type: Type.UPDATE_RESULT,
    payload: number
  }
}
