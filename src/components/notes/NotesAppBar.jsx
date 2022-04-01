import moment from "moment";
//
import { useDispatch, useSelector } from "react-redux";
import { saveNote, startUploading } from "../../actions/notes";

export const NotesAppBar = () => {
  //#region Redux
  const dispatch = useDispatch();
  const { activeNote } = useSelector((state) => state.notes);
  //#endregion Redux

  //#region Handles
  const handleSaveNote = () => {
    dispatch(saveNote(activeNote));
  };

  const handlePictureClick = () => {
    document.getElementById("inputImg").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    file && dispatch(startUploading(file));
  };
  //#endregion Handles

  return (
    <div className={"notes__appbar"}>
      <span>{moment().format("MMM Do YY")}</span>
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
