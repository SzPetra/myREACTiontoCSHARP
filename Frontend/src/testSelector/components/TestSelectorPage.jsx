import React from 'react';
import { useState, useEffect } from 'react';
import { TestDataContext, TestFinishedContext } from './TestFinishedContext';
import { Outlet } from 'react-router-dom';
import TestSelector from './TestSelector';
import TestEndPage from './TestEndPage';

function TestSelectorPage() {
    const [testComplete, setTestComplete] = useState(false);
    const [testResults, setTestResults] = useState(null);
   
    const [test, setTest] = useState(null);

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log(params.data + "|")
    const joinedString = params.data.replace(/ /g,'+');

    useEffect(
      ()=>{
        fetch(`https://localhost:7200/api/Email/DecryptUrl?payload=${joinedString}`)
        .then((response) => response.json())
        .then((data) => setTest(data));
      },
      []);

   {/*
  */}
  return (
      <TestFinishedContext.Provider value={{testComplete, setTestComplete}}>
        <TestDataContext.Provider value={{testResults, setTestResults}}>
          {testComplete ?
            <TestEndPage 
              testData={test}
              clientData={params.data}
            /> :
            <TestSelector testState={[test, setTest]}/>
          }
          <Outlet />
        </TestDataContext.Provider>
      </TestFinishedContext.Provider>
  )
};

export default TestSelectorPage;