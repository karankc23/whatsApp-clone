import type { UserIndex } from "../../types/types";
import { SearchBar } from "./SearchBar";
import "./index.css";
import { ContactInfo } from "./ContactInfo/ContactInfo";
import { CONNECTIONS } from "../../constant/connections";
import { Header } from "./header/Header";

export const ChatList = ({
  userId,
  setUserId,
}: {
  userId: UserIndex | null;
  setUserId: (userId: UserIndex) => void;
}): JSX.Element => {
  return (
    <div className="left-pane">
      <Header />
      <SearchBar />
      <div className="left-connections-wrapper">
        {CONNECTIONS.map((element, index) => {
          return (
            <ContactInfo
              key={element.id}
              userId={userId}
              setUserId={setUserId}
              currentUserId={index}
            />
          );
        })}
      </div>
    </div>
  );
};
