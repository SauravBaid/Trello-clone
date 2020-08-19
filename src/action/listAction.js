import { VALUES } from "../action";

export const addList = (title) => {
  return {
    type: VALUES.ADD_LIST,
    payload: title,
  };
};

export const editName = (id, title) => {
  return {
    type: VALUES.EDIT_LIST,
    payload: { title, id },
  };
};

export const deleteList = (id) => {
  return {
    type: VALUES.DELETE_LIST,
    payload: id,
  };
};

export const dnd = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId
) => {
  return {
    type: VALUES.DND,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
    },
  };
};
