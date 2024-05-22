function counter(state = 0, action) {
  const actionType = {
    INCREMENT: 1,
    DECREMENT: -1,
  };
  return state + (actionType[action.type] ?? 0);
}
