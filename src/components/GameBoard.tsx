import { useEffect, useReducer, useRef } from "react";
import UserAvatar from "./UserAvatar";
import Bottle from "./Bottle";
import { ActionType, reducer, State } from "../reducers/AppReducer";
import { USERS } from "../data";
import { IUser } from "../types";
import "./GameBoard.css";

const spinSound = new Audio("/Spinning sound.mp3");

const initialState: State = {
  countdown: 3,
  spinning: false,
  activePlayer: 0,
  targetPlayer: null,
  rotationAngle: 0,
  showKiss: false,
  kissCounter: 0,
};

const GameBoard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const returnUserInCircleByIndex = (user: IUser, index: number) => {
    const angle = (index / USERS.length) * 2 * Math.PI;
    const x = Math.cos(angle) * 40;
    const y = Math.sin(angle) * 40;

    return <UserAvatar key={user.id} user={user} x={x} y={y} />;
  };

  const spinBottle = () => {
    dispatch({ type: ActionType.START_SPIN });
    spinSound.play();
    let newTarget: number;
    do {
      newTarget = Math.floor(Math.random() * USERS.length);
    } while (newTarget === state.activePlayer);
    timeoutRef.current = setTimeout(() => {
      dispatch({ type: ActionType.STOP_SPIN, payload: newTarget });
      // showKiss();
    }, 4000);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (state.countdown > 0) {
      timer = setTimeout(() => dispatch({ type: ActionType.TICK }), 1000);
    } else if (state.countdown === 0) {
      spinBottle();
    }
    return () => {
      clearTimeout(timer);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.countdown]);

  return (
    <div className="game-board">
      {USERS.map(returnUserInCircleByIndex)}
      <Bottle spinning={state.spinning} rotationAngle={state.rotationAngle} />
      {state.countdown > 0 && (
        <div className="countdown">{state.countdown}</div>
      )}
      <div className="kiss-counter">Поцелуев: {state.kissCounter}</div>
    </div>
  );
};

export default GameBoard;
