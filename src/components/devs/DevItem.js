import React from "react";
import PropTypes from "prop-types";

const DevItem = ({ dev }) => {
  return (
    <li className="collection-item">
      <div>
        {dev.firstName} {dev.lastName}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

DevItem.propTypes = {
  dev: PropTypes.object.isRequired
};

export default DevItem;