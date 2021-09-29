import { SectionInterview } from "../../types";
import "../assessment/assessment.css"
import { Link } from "react-router-dom";
import InterviewTypes from "../interviewTypes/InterviewTypes";

interface AssessmentProps {
    interviews: SectionInterview[]
}
const Assessment: React.FC<AssessmentProps> = ({interviews}) => {


    return (
        <div className="assessment">
            <h3 className="header">Please select interview type</h3>

            <div className="interviewContainer">
                {
                    interviews.map(interview => {
                        return <Link to={`/interviews/${interview.id}`}> <InterviewTypes interview={interview}/> </Link>
                    })
                }
            </div>
        </div>
    )
}

export default Assessment;