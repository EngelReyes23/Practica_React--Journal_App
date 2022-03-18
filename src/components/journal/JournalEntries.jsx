import React from "react";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
  // genera un array de 100 elementos
  const entries = new Array(5).fill();

  return (
    <div className={"journal__entries"}>
      {entries.map((_,index ) => (
        <JournalEntry key={index} />
      ))}
    </div>
  );
};
