import { IUser } from "../types";
import "./UserAvatar.css";

interface UserAvatarProps {
  user: IUser;
  isActive: boolean;
  isMovingToCenter: boolean;
  centerOffset: string;
  x: number;
  y: number;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  user,
  isActive,
  isMovingToCenter,
  centerOffset,
  x,
  y,
}) => {
  return (
    <div
      key={user.id}
      className={`user ${isActive ? "active" : ""} ${
        isMovingToCenter ? "moving-to-center" : ""
      }`}
      style={{
        transform: isMovingToCenter
          ? `translate(${centerOffset}, 0) scale(1.3)`
          : `translate(${x}vmin, ${y}vmin)`,
        transition: isMovingToCenter
          ? "transform 1.2s ease-in-out"
          : "transform 0.6s ease-in-out",
      }}
    >
      <img className="user-avatar" src={user.avatar} alt={user.name} />
    </div>
  );
};

export default UserAvatar;
