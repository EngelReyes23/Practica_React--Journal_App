import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveNote, startUploading } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { activeNote } = useSelector((state) => state.notes);

  const handleSaveNote = () => {
    dispatch(saveNote(activeNote));
  };

  /* TODO: implementar subida de imágenes 
    https://284754913798112:NIjsJDVtPTj_cK3k9NehCDTzwaM@api.cloudinary.com/v1_1/vance-short/upload
  */

  const handlePictureClick = () => {
    document.getElementById("inputImg").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    file && dispatch(startUploading(file));
  };

  return (
    <div className={"notes__appbar"}>
      <span>23 octubre 1998</span>
      <div>
        <input
          type="file"
          name="img"
          id="inputImg"
          style={{ display: "none" }}
          // solo se puede subir imágenes
          accept="image/*"
          onChange={handleFileChange}
        />

        <button className={"btn"} onClick={handlePictureClick}>
          Picture
        </button>
        <button className={"btn"} onClick={handleSaveNote}>
          Save
        </button>
      </div>
    </div>
  );
};
