/* eslint-disable array-callback-return */

import { SectionInterview } from "../types";
import { State } from "./state";


export type Action =
  | {
      type: "GET_INTERVIEW";
      payload: SectionInterview[];
    }
  | {
      type: "GET_INTERVIEWBYID";
      payload: SectionInterview;
    }
  | {
      type: "ADD_INTERVIEW";
      payload: SectionInterview;
    };

  export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "GET_INTERVIEW":
        return {
          ...state,
          interviews: [ ...action.payload]
        };
      case "GET_INTERVIEWBYID":
        const interviewId = action.payload.id
        let interviews = action.payload
         state.interviews.map(interview => {
          if (interview.id === interviewId ) {
            interviews = interview;
            return interviews
          }
        })
        return {
          ...state,
          interviews: [ interviews ]
          
        }
      case "ADD_INTERVIEW":
        return {
          ...state,
          interviews: {
            ...state.interviews, [action.payload.id]: action.payload
          }
        };

      default:
        return state
    }
  };