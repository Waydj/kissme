import { IUser } from "../types";
import "./UserAvatar.css";

interface UserAvatarProps {
  user: IUser;
  x: number;
  y: number;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ user, x, y }) => {
  return (
    <div
      key={user.id}
      style={{ transform: `translate(${x}vmin, ${y}vmin)` }}
      className="user"
    >
      <img className="user-avatar" src={user.avatar} alt={user.name} />
      <p>{user.name}</p>
    </div>
  );
};

export default UserAvatar;
