import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";
import DevSelectOptions from "../devs/DevSelectOptions";

const EditLogModal = ({ updateLog, current }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [dev, setDev] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setDev(current.dev);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === "" || dev === "") {
      M.toast({ html: "Message and developer are required to post log." });
    } else {
      const upLog = {
        id: current.id,
        message,
        attention,
        dev,
        date: new Date()
      };

      updateLog(upLog);
      M.toast({ html: `Log updated by ${dev}` });

      //clear fields
      setMessage("");
      setDev("");
      setAttention(false);
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
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
              <DevSelectOptions />
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

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.log.current
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
