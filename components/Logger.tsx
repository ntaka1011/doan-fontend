const Logger = (reducer: any) => {
  return (prevState: any, action: any) => {
    console.group(action.type);
    const nextState = reducer(prevState, action);
    console.groupEnd;
    return nextState;
  };
};

export default Logger;
