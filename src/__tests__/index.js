import store from "../store/index";

// State test case for input not being empty or invalid key's
const state = store.getState().board;
for (let i = 0; i < state.length; i += 1) {
  test(`state[${i}] should have id and title as properties `, () => {
    expect(state[i]).toHaveProperty("id");
    expect(state[i]).toHaveProperty("title");
  });
}
