import { db } from "../firebase/firebaseConfig";

export const startNewNote = () => {
  return async (dispatch, getState) => {
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
  };
};
