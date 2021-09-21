/* eslint-disable array-callback-return */
import React from "react"
import { Interview } from "../../types"
import AddInterviewType from "../createInterviewForm/AddInterviewType"
import InterviewTypes from "../interviewTypes/InterviewTypes"


interface ConfigProps {
    interviews: Interview[]
}
const Configuration: React.FC<ConfigProps> = ({interviews}) => {


    return (
        <div className="configuration">
            <h3 className="header">Interview Types {'  '} {interviews.map(i => i.name.length)}</h3>

            <div className="interviewContainer">
                {
                    interviews.map(interview => {
                        return <InterviewTypes interview={interview}/>
                    })
                }

            <AddInterviewType interviews={interviews}/>
            </div>
        </div>
    )
}

export default Configuration