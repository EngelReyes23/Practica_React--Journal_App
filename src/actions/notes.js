import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { db } from "../firebase/firebaseConfig";
import { uploadFile } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { TYPES } from "../types/TYPES";
import { finishLoading, startLoading } from "./ui";

// Crea una nueva nota
export const startNewNote = () => {
  /* INFO: dispatch y getState los provee redux-thunk cuando recibe una función
  en lugar de un objeto */
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

    console.log(note);

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

// comienza la subida del archivo
export const startUploading = (file) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    const { activeNote: note } = getState().notes;

    Swal.fire({
      title: "Uploading...",
      text: "Please wait...",
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      // uploadFile sube el archivo y retorna la url
      const secureUrl = await uploadFile(file);

      // actualiza la nota con la url del archivo
      note.imgUrl = secureUrl;
      dispatch(activeNote(note.id, note));
      dispatch(saveNote(note));

      dispatch(finishLoading());
    } catch (error) {
      Swal.fire("Error!", error.message, "error");
    }
  };
};

export const startDeleteNote = (id) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());
    const uid = getState().auth.uid;

    const collectionPath = `users/${uid}/notes`;

    try {
      await db.doc(`${collectionPath}/${id}`).delete();

      dispatch(deleteNote(id));
      dispatch(finishLoading());

      Swal.fire("Deleted!", "Your note has been deleted!", "success");
    } catch {
      dispatch(finishLoading());
      Swal.fire("Error!", "Your note has not been deleted!", "error");
    }
  };
};

const deleteNote = (id) => ({
  type: TYPES.notesDelete,
  payload: id,
});
