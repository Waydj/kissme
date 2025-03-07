import UserAvatar from "./UserAvatar";
import Bottle from "./Bottle";
import { USERS } from "../data";
import { IUser } from "../types";
import "./GameBoard.css";

const GameBoard = () => {
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
