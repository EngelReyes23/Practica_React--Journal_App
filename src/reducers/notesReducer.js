import { TYPES } from "../types/TYPES";

const initialState = {
  notes: [],
  activeNote: {},
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.notesActive:
      return {
        ...state,
        activeNote: {
          ...action.payload,
        },
      };

    case TYPES.notesLoad:
      return {
        ...state,
        notes: action.payload,
      };

    case TYPES.notesUpdate:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };

    case TYPES.notesDelete:
      return {
        ...state,
        activeNote: {},
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    case TYPES.notesLogout:
      return {
        ...state,
        notes: [],
        activeNote: {},
      };

    default:
      return state;
  }
};
