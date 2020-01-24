import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDevs } from "../../actions/devActions";

const DevSelectOptions = ({ getDevs, dev: { devs, loading } }) => {
  useEffect(() => {
    getDevs();
    //eslint-disable-next-line
  }, []);
  return (
    !loading &&
    devs !== null &&
    devs.map(developer => (
      <option
        key={developer.id}
        value={`${developer.firstName} ${developer.lastName}`}
      >
        {developer.firstName} {developer.lastName}
      </option>
    ))
  );
};

DevSelectOptions.propTypes = {
  dev: PropTypes.object.isRequired,
  getDevs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dev: state.dev
});

export default connect(mapStateToProps, { getDevs })(DevSelectOptions);
