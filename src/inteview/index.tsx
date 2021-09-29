/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { types } from "util";
import { useStateValue } from "../state/state";
import { CreatedInterview, Id, MatchParams, SectionInterview } from "../types";
import Part from "./Part";

interface CreatedInterviewProps {
    interviews: SectionInterview[]
}
const Interview: React.FC<CreatedInterviewProps> = ({interviews}) => {
    const interviewMatch = useRouteMatch<MatchParams>('/createdInterview/:id')
    const id = useParams<Id>().id
    const showInterview = interviewMatch ? interviews.find(interview => interview.id === id) : null 
  
    return (
        <div>
            <h1>{showInterview?.name}</h1>
            {showInterview?.section.map(section => {
                return <div>
                <h3>{section.title}{"  "}Score({showInterview.totalScore})</h3>
                {section.questions.map(question => {
                 return<li>{question}</li>})}
            </div>;
}  
            )}
  
              <Link to="/configuration"><button>close</button></Link>
        </div>
    )
}
export default Interview;