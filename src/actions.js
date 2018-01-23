export function changeFilter(filter: Filter) {
  return {
    type: "CHANGE_FILTER",
    payload: {
      filter
    }
  };
}
