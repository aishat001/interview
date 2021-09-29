import { SectionInterview } from "../../types";
import { BsChevronCompactRight } from "react-icons/bs";
import "./interviewTypes.css"
// import CreatedInterview from ".";


interface InterviewProps {
    interview: SectionInterview
}
const InterviewTypes: React.FC<InterviewProps> = ({interview}) => {

    return (
            <div className="interview">
                <div>
                <strong key={interview.id}>{interview.name}</strong> 
                    {interview.section.map(section => {
                        return  <p key={section.title}> </p>

                    })}
                </div>
                <BsChevronCompactRight className="icon"/>
            </div>
    )
}

export default InterviewTypes;