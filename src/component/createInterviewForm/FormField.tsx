import { Field, Formik, Form, ErrorMessage } from "formik";
import { Title } from "../../types";



const FormField = ({onSubmit, openForm, closeForm}) => {

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
          <Form>
              <label htmlFor="interviewName">Enter Interview Name</label>
              <Field name="interviewName" type="text"/>
              <ErrorMessage name="interviewName"/>

              <label htmlFor="interviewTitle">Enter Interview Section Title</label>
              <Field name="interviewTitle" type="text"/>
              <ErrorMessage name="interviewTitle"/>

              <label htmlFor="interviewScore">Enter Interview Name</label>
              <Field name="interviewScore" type="text"/>
              <ErrorMessage name="interviewScore"/>

              <label htmlFor="interviewQuestions">Add a Question </label>
              <Field name="interviewQuestions" type="text"/>
              <ErrorMessage name="interviewQuestions"/>

              <button type="submit">Save</button>
          </Form>
     );
    }}
    </Formik>
    )
}
export default FormField