import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addDev } from "../../actions/devActions";

const AddDevModal = ({ addDev }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Name is required field." });
    } else {
      addDev({
        firstName,
        lastName
      });

      M.toast({ html: `${firstName} ${lastName} added to developer list.` });

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

AddDevModal.propTypes = {
  addDev: PropTypes.func.isRequired
};

export default connect(null, { addDev })(AddDevModal);
