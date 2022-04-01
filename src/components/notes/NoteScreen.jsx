import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
//
import { activeNote, startDeleteNote } from "../../actions/notes";
import { RequiredValues } from "../../helpers/requiredForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  //#region Redux
  const dispatch = useDispatch();
  const { activeNote: note } = useSelector((state) => state.notes);
  //#endregion Redux

  //#region States
  const {
    register,
    formState: { errors },
    reset,
    getValues,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: note.title,
      body: note.body,
      imgUrl: note.imgUrl ? note.imgUrl : "",
    },
  });

  const { title, body, imgUrl } = watch();

  //#endregion States

  //#region Effects
  // actualiza el contenido de la nota cuando se cambia el estado
  useEffect(() => {
    reset(note);
  }, [note.id]);

  // actualiza el titulo y el cuerpo de la nota activa
  useEffect(() => {
    dispatch(activeNote(note.id, getValues()));
  }, [title, body, imgUrl]);
  //#endregion Effects

  //#region Handles
  const handleDeleteNote = () => {
    // confirmar si se quiere eliminar la nota
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#30475E",
      cancelButtonColor: "#ff0000",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) dispatch(startDeleteNote(note.id));
    });
  };
  //#endregion Handles
  console.log("first");

  return (
    <div className={"notes__main-content"}>
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder={errors.title ? "Title is required" : "Title"}
          className="notes__title-input"
          autoCapitalize={"off"}
          {...register("title", {
            required: RequiredValues("Title"),
          })}
        />
        <textarea
          placeholder={"Take a note..."}
          className="notes__textarea"
          autoCapitalize={"off"}
          {...register("body", {
            required: RequiredValues("Body"),
          })}
        ></textarea>
        {note.imgUrl && (
          <div className="notes__image">
            <img src={note.imgUrl} alt="img" />
          </div>
        )}
        <button onClick={handleDeleteNote} className={"btn btn-delete"}>
          Delete
        </button>
      </div>
    </div>
  );
};
