import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className={"notes__main-content"}>
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder={"Title"}
          className="notes__title-input"
          autoCapitalize={"off"}
        />
        <textarea
          placeholder={"Take a note..."}
          className="notes__textarea"
          autoCapitalize={"off"}
        ></textarea>
        <div className="notes__image">
          <img
            src="https://static-cse.canva.com/_next/static/assets/complementary-colors.1200x690.f6aff61a6d4a050896d92666ac184888.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};
