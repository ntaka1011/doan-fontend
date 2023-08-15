const Logger = (reducer: any) => {
  return (prevState: any, action: any) => {
    console.group(action.type);
    console.log("Prev state: ", prevState);
    console.log("Action", action);

    const nextState = reducer(prevState, action);

    console.log("Next state", nextState);
    console.groupEnd;
    return nextState;
  };
};

export default Logger;
