import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveNote } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { activeNote } = useSelector((state) => state.notes);

  const handleSaveNote = () => {
    dispatch(saveNote(activeNote));
  };

  return (
    <div className={"notes__appbar"}>
      <span>23 octubre 1998</span>
      <div>
        <button className={"btn"}>Picture</button>
        <button className={"btn"} onClick={handleSaveNote}>
          Save
        </button>
      </div>
    </div>
  );
};
