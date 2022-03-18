import { TYPES } from "../types/TYPES";

export const authReducer = (state = {uid: ''}, action) => {
  switch (action.type) {
    case TYPES.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

    case TYPES.logout:
      return {};

    default:
      return state;
  }
};
