import { VALUES } from "../action";
import intialState from "./listReducers";

let cardId = 3;

const cardReducer = (state = intialState.board, action) => {
  switch (action.type) {
    case VALUES.ADD_CARD:
      cardId += 1;
      const newCard = {
        text: action.payload.text,
        id: `card-${cardId}`,
      };
      let newState = state.map((list) => {
        if (list.id == action.payload.id) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      return newState;

    case VALUES.EDIT_CARD:
      let myState = state.map((list) => {
        if (list.id == action.payload.listId) {
          list.cards.map((card) => {
            if (card.id == action.payload.id) {
              card.text = action.payload.text;
            }
          });
          return list;
        }
        return list;
      });
      return myState;

    case VALUES.DELETE_CARD:
      let states = state.map((list) => {
        if (list.id === action.payload.listId) {
          let val = list.cards.filter((item) => item.id !== action.payload.id);
          list.cards = val;
        }
        return list;
      });
      return states;
    default:
      return state;
  }
};

export default cardReducer;
