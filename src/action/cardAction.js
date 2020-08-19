import { VALUES } from "../action";

export const addCard = (id, text) => {
  return {
    type: VALUES.ADD_CARD,
    payload: { text, id },
  };
};

export const editCard = (id, text, listId) => {
  return {
    type: VALUES.EDIT_CARD,
    payload: { text, id, listId },
  };
};

export const deleteCard = (id, listId) => {
  return {
    type: VALUES.DELETE_CARD,
    payload: { id, listId },
  };
};
