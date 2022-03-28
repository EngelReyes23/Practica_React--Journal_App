import React from "react";
import { useSelector } from "react-redux";
import { NoteScreen } from "../notes/NoteScreen";
import { NothingSelected } from "./NothingSelected";
import { Sidebar } from "./Sidebar";

export const JournalScreen = () => {
  // Selecciona la nota activa
  const { activeNote } = useSelector((state) => state.notes);

  // Verifica si la nota activa es nula
  const isEmpty = (obj) => Object.keys(obj).length === 0;

  return (
    <div className={"journal__main-content"}>
      <Sidebar />

      {/* Si la nota es nula muestra "Nada"
      caso contrario muestra la nota */}
      <main>{isEmpty(activeNote) ? <NothingSelected /> : <NoteScreen />}</main>
    </div>
  );
};
