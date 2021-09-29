/* eslint-disable @typescript-eslint/no-unused-vars */
import { Interview, SectionInterview } from "../../types";
import { BsFillPlusCircleFill } from "react-icons/bs";
import FormField from "./FormField";
import { useState } from "react";
import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

interface AddInterviewProps {
    interviews: SectionInterview[]
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