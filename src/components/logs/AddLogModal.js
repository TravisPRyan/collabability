import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [dev, setDev] = useState("");

  const onSubmit = () => {
    if (message === "" || dev === "") {
      M.toast({ html: "Message and developer are required to post log." });
    } else {
      console.log(message, dev, attention);
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="dev"
              value={dev}
              className="browser-default"
              onChange={event => setDev(event.target.value)}
            >
              <option value="" disabled>
                Select Developer
              </option>
              <option value="Jenny Sanderson">Jenny Sanderson</option>
              <option value="Serge Serana">Serge Serana</option>
              <option value="Kaylie Edelman">Kaylie Edelman</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={event => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue-grey waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

export default AddLogModal;
