import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveNote } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { activeNote } = useSelector((state) => state.notes);

  const handleSaveNote = () => {
    dispatch(saveNote(activeNote));
  };

  /* TODO: implementar subida de imágenes 
    https://284754913798112:NIjsJDVtPTj_cK3k9NehCDTzwaM@api.cloudinary.com/v1_1/vance-short/upload
  */

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
