import { useSelector } from "react-redux";
import { JournalEntry } from "./JournalEntry";

export const JournalEntries = () => {
  // Get the journal entries from the Redux store
  const { notes } = useSelector((state) => state.notes);

  return (
    <div className={"journal__entries"}>
      {notes.map((note) => (
        <JournalEntry key={note.id} note={note} />
      ))}
    </div>
  );
};
