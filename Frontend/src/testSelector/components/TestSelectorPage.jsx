import React from 'react';
import TestSelector from './TestSelector';
import { useState } from 'react';

function TestSelectorPage() {
   {/* const [testComplete, setTestComplete]= useState(false);
   return ( testComplete ?
    <><TestEndPage /></> :
    <><TestSelector /></>
   );
  */}
  return (
    <>
      <TestSelector />
    </>
  )
};

export default TestSelectorPage;