import React, { createContext, useReducer } from "react";

enum ToggleKind {
  OPEN = "OPEN",
  CLOSE = "CLOSE",
}

// An interface for our actions
interface ToggleAction {
  type: ToggleKind;
  payload: any;
}

interface ToggleState {
  toggleModal: boolean;
  slug: string;
  dispatch: any;
}

const INITIAL_STATE: ToggleState = {
  toggleModal: false,
  slug: "",
  dispatch: null,
};
export const OpenContext = createContext(INITIAL_STATE);

const toggleReducer = (state: ToggleState, action: ToggleAction) => {
  switch (action.type) {
    case ToggleKind.OPEN:
      return {
        ...state,
        toggleModal: action.payload.toggle,
        slug: action.payload.slug,
      };
    case ToggleKind.CLOSE:
      return {
        ...state,
        toggleModal: action.payload,
      };
    default:
      return state;
  }
};

export const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(toggleReducer, INITIAL_STATE);

  return (
    <OpenContext.Provider
      value={{
        toggleModal: state.toggleModal,
        slug: state.slug,
        dispatch,
      }}
    >
      {children}
    </OpenContext.Provider>
  );
};
