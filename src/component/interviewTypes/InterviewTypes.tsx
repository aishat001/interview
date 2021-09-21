import { Interview } from "../../types";
import { BsChevronCompactRight } from "react-icons/bs";
import "./interviewTypes.css"


interface InterviewProps {
    interview: Interview
}
const InterviewTypes: React.FC<InterviewProps> = ({interview}) => {

    return (
            <div className="interview">
                <div>
                    <strong>{interview.name}</strong> 
                    <p>{interview.title} section{'  '}{interview.questions.length} questions</p>
                </div>
                <BsChevronCompactRight className="icon"/>
            </div>
    )
}

export default InterviewTypes;