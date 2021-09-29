/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
import { useRouteMatch, useParams } from "react-router";
import { Id, MatchParams, SectionInterview } from "../types";

interface PartProps {
    interview: SectionInterview[]
}

const Part: React.FC<PartProps> = ({interview}) => {
    const interviewMatch = useRouteMatch<MatchParams>('/interviews/:id')
    const id = useParams<Id>().id
    const showInterview = interviewMatch ? interview.find(interview => interview.id === id) : null 
  console.log(id);
  
    return (
        <div>
            { 
            showInterview?.section.map(section => {
                return <div>
                <h3>{section.title}{"  "}Score({showInterview.totalScore})</h3>
                {section.questions.map(question => {
                 return<li>{question}</li>})}
            </div>;
}  
            )}
        </div>
    )
   
};

export default Part;