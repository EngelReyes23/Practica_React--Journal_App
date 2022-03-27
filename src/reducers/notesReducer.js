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

    default:
      return state;
  }
};
