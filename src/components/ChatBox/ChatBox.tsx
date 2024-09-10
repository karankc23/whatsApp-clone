import type { UserIndex } from "../../types/types.ts";
import { Conversation } from "./Conversation/Conversation.tsx";
import { SendTextEditor } from "./components/SendTextEditor.tsx";
import { ContactInfoPanel } from "./components/ContactInfoPanel.tsx";
import "./index.css";
import { WarningPopup } from "./components/WarningPopup.tsx";

export const ChatBox = ({
  userId,
  currentMessage,
  setCurrentMessage,
  makeRerender,
  setMakeRerender,
}: {
  userId: UserIndex;
  currentMessage: string;
  setCurrentMessage: (message: string) => void;
  makeRerender: boolean;
  setMakeRerender: (makeRerender: boolean) => void;
}): JSX.Element => {
  return (
    <div className="right-pane">
      <ContactInfoPanel userId={userId} />
      <WarningPopup />
      <Conversation
        userId={userId}
        makeRerender={makeRerender}
        setMakeRerender={setMakeRerender}
      />
      <SendTextEditor
        userId={userId}
        currentMessage={currentMessage}
        setCurrentMessage={setCurrentMessage}
      />
    </div>
  );
};
