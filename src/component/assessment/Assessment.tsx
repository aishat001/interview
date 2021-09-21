import { Interview } from "../../types";
import InterviewTypes from "../interviewTypes/InterviewTypes";
import "../assessment/assessment.css"
import { Link } from "react-router-dom";

interface AssessmentProps {
    interviews: Interview[]
}
const Assessment: React.FC<AssessmentProps> = ({interviews}) => {


    return (
        <div className="assessment">
            <h3 className="header">Please select interview type</h3>

            <div className="interviewContainer">
                {
                    interviews.map(interview => {
                        return <Link to='/interview'> <InterviewTypes interview={interview}/> </Link>
                    })
                }
            </div>
        </div>
    )
}

export default Assessment;