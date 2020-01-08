import React, { useState, useEffect } from "react";
import DevItem from "./DevItem";

const DevListModal = () => {
  const [devs, setDevs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDevs();
    //eslint-disable-next-line
  }, []);

  const getDevs = async () => {
    setLoading(true);
    const res = await fetch("/devs");
    const data = await res.json();

    setDevs(data);
    setLoading(false);
  };

  return (
    <div id="dev-list-modal" className="modal">
      <div className="modal-content">
        <h4>DeveloperList</h4>
        <ul className="collection">
          {!loading && devs.map(dev => <DevItem dev={dev} key={dev.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default DevListModal;
