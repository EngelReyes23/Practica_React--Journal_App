import React from "react";
import { Link } from "react-router-dom";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  return (
    <aside className={"journal__sidebar"}>
      <div className="journal__sidebar-navbar">
        <h3 className={""}>
          <span className="material-icons-round">dark_mode</span>
          <span>UserName</span>
        </h3>

        <Link className={" btn btn-logOut"} to='/login'>Logout</Link>
      </div>
      <div className="journal__sidebar-entry">
        <span className="material-icons md-48">add_box</span>
        <span>New Entry</span>
      </div>
      <JournalEntries />
    </aside>
  );
};
