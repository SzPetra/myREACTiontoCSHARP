import React from 'react';
import { useState } from 'react';
import { TestDataContext, TestFinishedContext } from './TestFinishedContext';
import { Outlet } from 'react-router-dom';
import TestSelector from './TestSelector';
import TestEndPage from './TestEndPage';

function TestSelectorPage() {
    const [testComplete, setTestComplete] = useState(false);
    const [testResults, setTestResults] = useState(null);
   
   {/*
  */}
  return (
      <TestFinishedContext.Provider value={{testComplete, setTestComplete}}>
        <TestDataContext.Provider value={{testResults, setTestResults}}>
          {testComplete ?
            <TestEndPage /> :
            <TestSelector />
          }
          <Outlet /> {/*  */}
        </TestDataContext.Provider>
      </TestFinishedContext.Provider>
  )
};

export default TestSelectorPage;