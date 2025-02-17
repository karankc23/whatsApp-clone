import "../index.css";

export const DefaultStartPage = (): JSX.Element => {
  return (
    <div className="default">
      <img src="https://static.whatsapp.net/rsrc.php/v3/yS/r/aGcVD59xVTb.png" />
      <div className="default-heading">Download Whatsapp for Mac</div>
      <div className="default-body">
        Make calls and get faster experience when you download the Mac app
      </div>
      <button className="default-button">Get from App Store</button>
    </div>
  );
};
