import "./index.css";
import type { UserIndex } from "../../../types/types";
import { CONNECTIONS } from "../../../constant/connections";
import { messageList } from "../../../assets/messages";

export const ProfilePicture = ({ imgUrl }: { imgUrl: string }): JSX.Element => {
  return (
    <div className="profile-picture">
      <img className="profile-image" src={imgUrl} alt="DP" />
    </div>
  );
};
export const Description = ({
  userName,
  lastMessage,
  time,
}: {
  userName: string;
  lastMessage: string;
  time: string;
}): JSX.Element => {
  return (
    <div className="description">
      <div className="top-description">
        <span className="user-name">{userName}</span>
        <span className="time">{time}</span>
      </div>
      <span className="last-message">{lastMessage}</span>
    </div>
  );
};

export const ContactInfo = ({
  userId,
  setUserId,
  currentUserId,
}: {
  userId: UserIndex | null;
  setUserId: (userId: UserIndex) => void;
  currentUserId: number;
}): JSX.Element => {
  const handleClick = () => {
    setUserId(currentUserId);
    console.log(userId, setUserId, currentUserId);
  };
  return (
    <div
      style={{
        background:
          userId === currentUserId ? `rgb(42, 57, 66)` : `rgb(17, 27, 33)`,
      }}
      className="user"
      onClick={handleClick}
    >
      <ProfilePicture imgUrl={CONNECTIONS[currentUserId].profileImg} />
      <Description
        userName={CONNECTIONS[currentUserId].name}
        lastMessage={
          messageList[currentUserId][messageList[currentUserId].length - 1]
            ?.sentMessage ?? ""
        }
        time={
          messageList[currentUserId][messageList[currentUserId].length - 1]
            ?.messageTime ?? ""
        }
      />
    </div>
  );
};
