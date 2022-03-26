import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <aside className={"journal__sidebar"}>
      <div className="journal__sidebar-navbar">
        <h3 className={""}>
          <span className="material-icons-round">dark_mode</span>
          <span>UserName</span>
        </h3>

        <button
          // to={"/auth/login"}
          className={" btn btn-logOut"}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="journal__sidebar-entry">
        <span className="material-icons md-48">add_box</span>
        <span>New Entry</span>
      </div>
      <JournalEntries />
    </aside>
  );
};
