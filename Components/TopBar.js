import React from "react";

export default function TopBar() {
  return (
    <div className="TopBar">
      <input className="TextTopBar" type="text" id="fname" name="fname" />
      <button
        className="SubmitTopBar"
        type="submit"
        name="btnEnvoiForm"
        title="Envoyer"
      >
        <img src="/Img/AddButton.png" alt="" />
      </button>
    </div>
  );
}
