import { useState } from "react";
import "./App.css";
import { ChatList } from "./components/ChatList/ChatList.tsx";
import { ChatBox } from "./components/ChatBox/ChatBox.tsx";
import type { UserIndex } from "./types/types.ts";
import { DefaultStartPage } from "./components/ChatBox/components/DefaultStartPage.tsx";

function App() {
  const [userId, setUserId] = useState<UserIndex | null>(null);
  const [currentMessage, setCurrentMessage] = useState("");
  const [makeRerender, setMakeRerender] = useState(false);
  return (
    <div className="container">
      <ChatList userId={userId} setUserId={setUserId} />
      {typeof userId === "number" ? (
        <ChatBox
          userId={userId}
          currentMessage={currentMessage}
          setCurrentMessage={setCurrentMessage}
          makeRerender={makeRerender}
          setMakeRerender={setMakeRerender}
        />
      ) : (
        <DefaultStartPage />
      )}
    </div>
  );
}

export default App;
/**
 * div.content
 * maxwidth  1700px
 * flex direction row
 */

/**
 * left pane -  min-width 336.594px
 */

/**
 * right pane - min-width 411.406px
 */

/**
 * components
 *  leftsection
 *    leftpane
 *    header
 *    notification
 *    searchbar
 *    users
 *
 *  rightsection
 *    header
 *    message
 *    input
 *
 *
 *
 * appjs - state user id
 */

/**
 * User
 * profilepicture
 * description
 *  Username
 *  lastmessage
 * timeofmessage
 */

/**
 * border-bottom-color rgb(209, 215, 219)
 * 16px 12px
 */

/**
 * 71 57
 * 53 19
 */
