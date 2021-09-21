/* eslint-disable @typescript-eslint/no-unused-vars */
import { Interview } from "../../types";
import { BsFillPlusCircleFill } from "react-icons/bs";
import "../interviewTypes/InterviewTypes";
import FormField from "./FormField";
import { useState } from "react";
import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

interface AddInterviewProps {
    interviews: Interview[]
}

const AddInterviewType: React.FC<AddInterviewProps> = ({interviews}) => {


    return (
        <>
            <Link to="/createInterview">
            <div className="createNewInterview">
                    <strong>Add Interview type</strong> <BsFillPlusCircleFill className="icon"/>
                </div>
            </Link>


        </>
    )
}

export default AddInterviewType;