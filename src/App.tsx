/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Assessment from './component/assessment/Assessment';
import Configuration from './component/configuration/Configuration';
import Summaries from './component/summaries/Summaries';
import { Interview } from './types';
import { BsPieChart, BsReverseLayoutTextSidebarReverse, BsGear } from "react-icons/bs";
import FormField from './component/createInterviewForm/FormField';
import SelectedInterview from './component/interviewTypes/SelectedInterview';



const App = () => {
  const interviews : Interview[] = [
    {
      name: "React Foundation",
      title: "basic",
      totalScore: 10,
      questions: [
        "differentiate between real dom and virtual dom",
        "what is state in react and how it is used",
        "explain the lifecycle methods of react"
      ]
    },
    {
      name: "VueJs",
      title: "intermidiate",
      totalScore: 10,
      questions: [
        "differentiate between real dom and virtual dom",
        "what is state in react and how it is used",
        "explain the lifecycle methods of react"
      ]
    },
    {
      name: "nodeJs",
      title: "advanced",
      totalScore: 10,
      questions: [
        "differentiate between real dom and virtual dom",
        "what is state in react and how it is used",
        "explain the lifecycle methods of react"
      ]
    }
  ]

  const [openForm, setOpenForm] = React.useState<boolean>(false);

  const closeForm = (): void => {
      setOpenForm(false);
    };
  // const handleClick = (): void => setOpenForm(true)

  const createInterview = async (value: Interview) => {
      try {
          const newInterview = await {...value}
          interviews.push(newInterview)
      }catch(e) {
          console.log("e.message" || 'Unknown Error');
      }

  }


  return (
    <div className="App">
      <div className="logoHeader">Logo</div>
    <Router>
      <div className="AppContainer">
         <div className="sideNav">
               <div className="sideNav-item"> <BsReverseLayoutTextSidebarReverse /> <Link to="/">Assessment</Link> </div>
               <div className="sideNav-item"> <BsPieChart/> <Link to="/summaries"> Summaries</Link> </div>
               <div className="sideNav-item">  <BsGear/> <Link to="/configuration">  Configuration</Link> </div>
         </div>
<Switch>
         <Route path="/" exact>
            <Assessment interviews={interviews}/> 
          </Route>
         <Route path="/summaries" exact component={Summaries}>
           <Summaries/>
         </Route>
         <Route path="/configuration" exact>
            <Configuration interviews={interviews}/> 
          </Route>
         <Route path="/interview" exact>
            <SelectedInterview onSubmit={createInterview}/> 
          </Route>
         <Route path="/createInterview" exact>
         <FormField onSubmit={createInterview} openForm={openForm} closeForm={closeForm}/>
          </Route>
    </Switch>
         </div>
     </Router>
   
    </div>
  );
}



 

 

export default App;
