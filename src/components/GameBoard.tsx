import { useReducer } from "react";
import UserAvatar from "./UserAvatar";
import Bottle from "./Bottle";
import { reducer, State } from "../reducers/AppReducer";
import { USERS } from "../data";
import { IUser } from "../types";
import "./GameBoard.css";

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

  const returnUserInCircleByIndex = (user: IUser, index: number) => {
    const angle = (index / USERS.length) * 2 * Math.PI;
    const x = Math.cos(angle) * 40;
    const y = Math.sin(angle) * 40;

    return <UserAvatar key={user.id} user={user} x={x} y={y} />;
  };

  return (
    <div className="game-board">
      {USERS.map(returnUserInCircleByIndex)}
      <Bottle />
      <div className="kiss-counter">Поцелуев: 2</div>
    </div>
  );
};

export default GameBoard;
