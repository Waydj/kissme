import { USERS } from "../data";

export interface State {
  countdown: number;
  spinning: boolean;
  activePlayer: number | null;
  targetPlayer: number | null;
  rotationAngle: number;
  showKiss: boolean;
  kissCounter: number;
}

export enum ActionType {
  TICK = "TICK",
  START_SPIN = "START_SPIN",
  STOP_SPIN = "STOP_SPIN",
  SHOW_KISS = "SHOW_KISS",
  HIDE_KISS = "HIDE_KISS",
}

export interface Action {
  type: ActionType;
  payload?: number;
}

export const reducer = (state: State, action: Action): State => {
  const anglePerPlayer = 360 / USERS.length;
  const newAngle = 90 + (action.payload ?? 0) * anglePerPlayer;

  switch (action.type) {
    case ActionType.TICK:
      return { ...state, countdown: state.countdown - 1 };
    case ActionType.START_SPIN:
      return { ...state, spinning: true };
    case ActionType.STOP_SPIN:
      return {
        ...state,
        spinning: false,
        targetPlayer: action.payload ? action.payload : null,
        rotationAngle: newAngle,
      };
    case ActionType.SHOW_KISS:
      return { ...state, showKiss: true };
    case ActionType.HIDE_KISS:
      return {
        ...state,
        showKiss: false,
        kissCounter: state.kissCounter + 1,
        activePlayer: state.targetPlayer,
        targetPlayer: null,
        countdown: 3,
      };
    default:
      return state;
  }
};
