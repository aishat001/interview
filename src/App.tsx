/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useParams } from "react-router-dom";
import './App.css';
import Assessment from './component/assessment/Assessment';
import Configuration from './interviewConfiguration/Configuration';
import Summaries from './component/summaries/Summaries';
import { Id, SectionInterview } from './types';
import { BsPieChart, BsReverseLayoutTextSidebarReverse, BsGear } from "react-icons/bs";
import FormField from './interviewConfiguration/createInterviewForm/FormField';
import SelectedInterview from './component/interviewTypes/Form';
import axios from 'axios';
import { apiBaseUrl } from './constant';
import { useStateValue } from './state/state';
import Interview from './inteview';
import CreateInterview from './interviewConfiguration/createInterviewForm/FormField';
// import { useEffect } from 'react-router/node_modules/@types/react';



const App = () => {
const [{interviews}, dispatch] = useStateValue();
  React.useEffect(() => {
    const fetchInterviewList = async () => {
      try {
        const {data: interviews} = await axios.get<SectionInterview[]>(
          `${apiBaseUrl}/interviews`
        );
        dispatch({ type: "GET_INTERVIEW", payload: interviews})
        console.log(interviews);
      } catch (e) {        
        console.error(e);
      }
    };
    void fetchInterviewList()
  }, [dispatch])



  return (
    <div className="App">
      <div className="logoHeader">Logo</div>
    <Router>
      <div className="AppContainer">
         <div className="sideNav">
               <div className="sideNav-item"> <BsReverseLayoutTextSidebarReverse /> <Link to="/interviews">Assessment</Link> </div>
               <div className="sideNav-item"> <BsPieChart/> <Link to="/summaries"> Summaries</Link> </div>
               <div className="sideNav-item">  <BsGear/> <Link to="/configuration">  Configuration</Link> </div>
         </div>
      <Switch>
         <Route path="/interviews" exact>
            <Assessment interviews={interviews}/> 
          </Route>
         <Route path="/summaries" exact component={Summaries}>
           <Summaries/>
         </Route>
         <Route path="/configuration" exact>
            <Configuration/>
          </Route>
          <Route path="/createdInterview/:id" exact>
           <Interview interviews={interviews}/>
          </Route>
          
         <Route path="/interviews/:id" >
            <SelectedInterview onSubmit={null} interviews={interviews}/> 
          </Route>
         <Route path="/createInterview" exact>
            <CreateInterview onSubmit={null} /> 
          </Route>

    </Switch>
         </div>
     </Router>
   
    </div>
  );
}



 

 

export default App;


