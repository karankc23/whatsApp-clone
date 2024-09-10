export const WarningPopup = (): JSX.Element => {
  return (
    <div
      style={{
        textAlign: "center",
        color: "rgb(188,179,122)",
        backgroundColor: "rgb(31,39,43)",
        borderRadius: "20%",
        width: "60%",
        alignSelf: "center",
        padding: "5px",
      }}
    >
      Messages are end-to-end encrypted. No one outside of this chat, not even
      WhatsApp, <br /> can read or listen to them. Click to learn more.
    </div>
  );
};
