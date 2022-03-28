import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  const { activeNote: note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const { formValues, handleInputChange, reset } = useForm(note);
  const { title, body } = formValues;

  // actualiza el contenido de la nota cuando se cambia el estado
  useEffect(() => {
    reset(note);
  }, [note.id, note.imgUrl]);

  // actualiza el titulo y el cuerpo de la nota activa
  useEffect(() => {
    dispatch(activeNote(note.id, formValues));
  }, [formValues]);

  return (
    <div className={"notes__main-content"}>
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          value={title}
          placeholder={"Title"}
          className="notes__title-input"
          autoCapitalize={"off"}
          name="title"
          onChange={handleInputChange}
        />
        <textarea
          value={body}
          placeholder={"Take a note..."}
          className="notes__textarea"
          autoCapitalize={"off"}
          name="body"
          onChange={handleInputChange}
        ></textarea>
        {note.imgUrl && (
          <div className="notes__image">
            <img src={note.imgUrl} alt="img" />
          </div>
        )}
        <button className={"btn btn-delete"}>Delete</button>
      </div>
    </div>
  );
};
