import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddDevModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Name is required field." });
    } else {
      console.log(firstName, lastName);
      //clear fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-dev-modal" className="modal">
      <div className="modal-content">
        <h4>New Developer</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={event => setLastName(event.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
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

export default AddDevModal;
