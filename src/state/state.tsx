/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
// import React, { createContext, useContext, useReducer } from "react-router/node_modules/@types/react";
import React, { createContext, useContext, useReducer } from "react";
import { SectionInterview } from "../types";
import { Action } from "./reducer";

export type State = {
    interviews: SectionInterview[]
}
const initialState: State = {
    interviews: []
};

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
    initialState, () => initialState
]);

type stateProviderProps = {
    reducer: React.Reducer<State, Action>;
    children: React.ReactElement;
}

export const StateProvider: React.FC<stateProviderProps> = ({
    reducer,
    children
} : stateProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StateContext.Provider value={[state, dispatch]}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateValue = () => useContext(StateContext);