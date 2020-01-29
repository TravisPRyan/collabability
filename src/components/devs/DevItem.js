import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteDev } from "../../actions/devActions";
import M from "materialize-css/dist/js/materialize.min.js";

const DevItem = ({ dev, deleteDev }) => {
  const onDelete = () => {
    deleteDev(dev.id);
    M.toast({ html: "Developer removed from list." });
  };

  return (
    <li className="collection-item">
      <div>
        {dev.firstName} {dev.lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

DevItem.propTypes = {
  dev: PropTypes.object.isRequired,
  deleteDev: PropTypes.func.isRequired
};

export default connect(null, { deleteDev })(DevItem);
