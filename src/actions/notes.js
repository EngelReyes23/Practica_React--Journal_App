import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { TYPES } from "../types/TYPES";
import { finishLoading, startLoading } from "./ui";

// Crea una nueva nota
export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    const uid = getState().auth.uid;
    console.log(uid);

    const newNote = {
      title: "title",
      body: "body",
      createdAt: new Date().getTime(),
    };

    const collectionPath = `users/${uid}/notes`;

    const doc = await db.collection(collectionPath).add(newNote);
    console.log(doc);
    dispatch(activeNote(doc.id, newNote));
    dispatch(finishLoading());
  };
};

// Establece la nota activa
export const activeNote = (id, note) => ({
  type: TYPES.notesActive,
  payload: { id, ...note },
});

// Obtiene todas las notas de la base de datos
export const getNotes = (uid) => {
  return async (dispatch) => {
    dispatch(startLoading());
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
    dispatch(finishLoading());
  };
};

// Establece las notas[]
export const setNotes = (notes) => ({
  type: TYPES.notesLoad,
  payload: notes,
});

// Guarda la nota en la base de datos
export const saveNote = (note) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    const uid = getState().auth.uid;
    const collectionPath = `users/${uid}/notes`;

    if (!note.imgUrl) delete note.imgUrl;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    try {
      await db.doc(`${collectionPath}/${note.id}`).update(noteToFirestore);

      dispatch(refreshNotes(note.id, note));
      dispatch(finishLoading());

      Swal.fire("Saved!", "Your note has been saved!", "success");
    } catch {
      dispatch(finishLoading());
      Swal.fire("Error!", "Your note has not been saved!", "error");
    }
  };
};

// Actualiza la nota especifica localmente
export const refreshNotes = (id, note) => ({
  type: TYPES.notesUpdate,
  payload: {
    id,
    note,
  },
});
