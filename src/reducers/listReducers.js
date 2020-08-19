import { VALUES } from "../action";

const intialState = {
  board: [
    {
      id: `list+${0}`,
      title: "Backlogs",
      cards: [],
    },
    {
      id: `list+${1}`,
      title: "Priority",
      cards: [],
    },
  ],
};

const listReducer = (state = intialState.board, action) => {
  switch (action.type) {
    case VALUES.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${
          new Date().getMilliseconds() + Math.floor(Math.random() * 1000)
        }`,
      };
      return [...state, newList];

    case VALUES.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: `card-${
          new Date().getMilliseconds() + Math.floor(Math.random() * 1000)
        }`,
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

    case VALUES.EDIT_LIST:
      let editState = state.map((item) => {
        if (item.id == action.payload.id) {
          item.title = action.payload.title;
        }
        return item;
      });
      console.log(editState);
      return editState;

    case VALUES.DELETE_LIST:
      let newstate = {
        board: state.filter((item) => item.id !== action.payload),
      };
      // console.log(newstate);
      return newstate.board;

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
      // console.log(states);
      return states;

    case VALUES.DND:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
      } = action.payload;
      const dndState = [...state];

      if (droppableIdStart === droppableIdEnd) {
        let list = state.find((list) => droppableIdStart === list.id);
        let card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
      if (droppableIdStart != droppableIdEnd) {
        let listStart = state.find((list) => droppableIdStart === list.id);
        let card = listStart.cards.splice(droppableIndexStart, 1);
        let listEnd = state.find((list) => droppableIdEnd === list.id);

        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return dndState;

    default:
      return state;
  }
};

export default listReducer;
