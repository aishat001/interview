/* eslint-disable array-callback-return */
import React from "react"
import { Link} from "react-router-dom"
import { SectionInterview } from "../types"
import AddInterviewType from "./createInterviewForm/AddInterviewType"
import InterviewTypes from "../component/interviewTypes/InterviewTypes"
import axios from "axios"
import { apiBaseUrl } from "../constant"
import { useStateValue } from "../state"


const Configuration = () => {
const [{interviews}, dispatch] = useStateValue()

      React.useEffect(() => {
    const fetchInterviewById = async () => {
      try {
        const {data: interviews} = await axios.get<SectionInterview[]>(
          `${apiBaseUrl}/createdInterview/:id`
        );
        dispatch({ type: "GET_INTERVIEW", payload: interviews})
        console.log(interviews);
      } catch (e) {        
        console.error(e);
      }
    };
    void fetchInterviewById()
  }, [dispatch])

    return (
        <div className="configuration">
            <h3 className="header">Interview Types {'  '} {interviews.length}</h3>

            <div className="interviewContainer">
                {
                    interviews.map(interview => {
                      return <Link to={`/createdInterview/${interview.id}`}><InterviewTypes interview={interview} key={interview.id}/></Link>
                    })
                }

            <AddInterviewType interviews={interviews}/>
            </div>
        </div>
    )
}

export default Configuration