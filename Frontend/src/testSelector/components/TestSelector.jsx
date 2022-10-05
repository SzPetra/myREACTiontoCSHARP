import React from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';

import testPageOptions from '../../options/testPageOptions';

const TestSelector = ({testState}) => {
    const [test, setTest] = testState;

    return (test ?
      selectTestType(test) :
      <p>Loading...</p>
      );
};

function selectTestType(test) {
  for (let i = 0; i < testPageOptions.length; i++)
  {
    if (test.testType === testPageOptions[i].option)
    {
      return testPageOptions[i].component;
    }
  };
  return null;
};

export default TestSelector;