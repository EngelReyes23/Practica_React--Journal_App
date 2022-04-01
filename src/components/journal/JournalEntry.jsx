import moment from "moment";
//
import { useDispatch, useSelector } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntry = ({ note }) => {
  //#region Redux
  const dispatch = useDispatch();

  const { activeNote: noteActive } = useSelector((state) => state.notes);
  //#endregion Redux

  const { title, body, createdAt, id, imgUrl } = note;

  const noteDate = moment(createdAt);

  // Selecciona la nota activa
  const handleEntryClick = () => {
    // si la nota ya esta activa que no vuelva a disparar la acción
    noteActive.id !== id && dispatch(activeNote(id, note));
  };

  return (
    <div className="journal__entry" onClick={handleEntryClick}>
      {imgUrl && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${imgUrl})`,
          }}
        ></div>
      )}

      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>

      <div className="journal__entry-date-box">
        <b>{noteDate.format("dddd")}</b>
        <p>{noteDate.format("Do")}</p>
      </div>
    </div>
  );
};
