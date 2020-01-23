import React, { useState, useEffect } from "react";
import DevItem from "./DevItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDevs } from "../../actions/devActions";

const DevListModal = ({ getDevs, dev: { devs, loading } }) => {
  useEffect(() => {
    getDevs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="dev-list-modal" className="modal">
      <div className="modal-content">
        <h4>DeveloperList</h4>
        <ul className="collection">
          {!loading &&
            devs !== null &&
            devs.map(dev => <DevItem dev={dev} key={dev.id} />)}
        </ul>
      </div>
    </div>
  );
};

DevListModal.propTypes = {
  dev: PropTypes.object.isRequired,
  getDevs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dev: state.dev
});

export default connect(mapStateToProps, { getDevs })(DevListModal);
