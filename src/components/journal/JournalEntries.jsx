import React from "react";
import { useSelector } from "react-redux";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
  // // genera un array de 100 elementos
  // const entries = new Array(5).fill();

  const { notes } = useSelector((state) => state.notes);

  return (
    <div className={"journal__entries"}>
      {notes.map((note) => (
        <JournalEntry key={note.id} note={note} />
      ))}
    </div>
  );
};
