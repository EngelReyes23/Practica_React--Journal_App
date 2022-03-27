import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntry = ({ note }) => {
  const dispatch = useDispatch();

  const { title, body, createdAt, id, imgUrl } = note;
  const noteDate = moment(createdAt);

  const { activeNote: noteActive } = useSelector((state) => state.notes);

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
            backgroundImage:
              "url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
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
