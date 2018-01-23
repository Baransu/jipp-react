// @flow

export type Filter = "all" | "completed" | "incompleted";

type State = {
  todos: Array<string>,
  filter: Filter
};

const initialState: State = {
  todos: [],
  filter: "all"
};

function reducer(state: State = initialState, action): State {
  if (action.type === "CHANGE_FILTER") {
    const { filter } = action.payload;
    return { ...state, filter };
  }
  return state;
}

export default reducer;
