/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable array-callback-return */
import { Field, Formik,  ErrorMessage } from "formik";
import React from "react";
import { Button, Form} from "semantic-ui-react";
import { Id, MatchParams, SectionInterview, Title } from "../../types";
import "./form.css"
import Togglable from "../toggle/Togglable";
import { useParams, useRouteMatch } from "react-router";


interface SectionProps {
    interviews : SectionInterview[]
    onSubmit: any
}

const SelectedInterview: React.FC<SectionProps> = ({onSubmit, interviews}) => {


  const interviewMatch = useRouteMatch<MatchParams>('/interviews/:id')
  const id = useParams<Id>().id
  const interview = interviewMatch ? interviews.find(interview => interview.id === id) : null 
console.log(id);


  
  // interviews.map(i => if (i.id === params) {
    
  // })
    return ( 
        <Formik
    initialValues={{
    name: "",
    title: Title.Basic,
    score: "",
    questions: [],
  }}
  onSubmit={onSubmit}
  validate={values => {
    const requiredError = "Field is required";
    const errors: { [field: string]: string } = {};
    if (!values.name) {
      errors.name = requiredError;
    }
    if (!values.title) {
      errors.ssn = requiredError;
    }
    if (!values.score) {
      errors.dateOfBirth = requiredError;
    }
    if (!values.questions) {
      errors.occupation = requiredError;
    }
    return errors;
  }}
  >
    {({ isValid, dirty }) => {
return (
      <Form className="form-container">
          <h1>{interview?.name}</h1>

        <Form.Group>
          <label htmlFor="full name">Enter Full Name</label>
          <Field name="fullname" type="text"/>
          <ErrorMessage name="enter name"/>

          <label htmlFor="email">Enter email</label>
          <Field name="email" type="email"/>
          <ErrorMessage name="interviewTitle"/>

          <Button type="submit">Save</Button>

        </Form.Group>

        <Form.Group>
        {interview?.section.map(s => { 
            return <div className="question">
              <h1>{s.title}</h1>
              <Togglable buttonLabel="open">
              {s.questions.map(q => <div className="label">
                <label htmlFor="question">{q}</label>
                <Field name="answer" type="text"/>
                <ErrorMessage name="answer Question"/>
              </div>)}
              </Togglable>
            </div>
        })}
      </Form.Group>
      </Form>
 );
}}
</Formik>
)
};

export default SelectedInterview