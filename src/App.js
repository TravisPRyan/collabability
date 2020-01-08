import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import AddDevModal from "./components/devs/AddDevModal";
import EditLogModal from "./components/logs/EditLogModal";
import DevListModal from "./components/devs/DevListModal";
import "./App.css";

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddDevModal />
        <DevListModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
