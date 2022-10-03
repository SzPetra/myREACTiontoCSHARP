import React from 'react';
import { useState, useEffect } from 'react';
import testPageOptions from '../../options/testPageOptions';

const TestSelector = () => {
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