import { USERS } from "../data";

export interface State {
  countdown: number;
  activePlayer: number | null;
  targetPlayer: number | null;
  rotationAngle: number;
  showKiss: boolean;
  kissCounter: number;
}

export const initialState: State = {
  countdown: 3,
  activePlayer: 0,
  targetPlayer: null,
  rotationAngle: 0,
  showKiss: false,
  kissCounter: 0,
};

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

const anglePerPlayer = 360 / USERS.length;
const randomOffset = () => (Math.random() < 0.5 ? 1440 : -1440);

export const reducer = (state: State, action: Action): State => {
  const newAngle = 90 - randomOffset() + (action.payload ?? 0) * anglePerPlayer;

  switch (action.type) {
    case ActionType.TICK:
      return { ...state, countdown: state.countdown - 1 };
    case ActionType.START_SPIN:
      return { ...state, rotationAngle: newAngle };
    case ActionType.STOP_SPIN:
      return {
        ...state,
        targetPlayer: action.payload ?? 0,
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
