import React from 'react';
import { useState, useEffect } from 'react';

const TestSelector = () => {
    const [test, setTest] = useState(null);

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log(params.data + "dddd")
    const joinedString = params.data.replace(/ /g,'+');
    useEffect(
      ()=>{
        fetch(`https://localhost:7200/api/Email/DecryptUrl?payload=${joinedString}`)
    .then((response) => response.json())
    .then((data) => setTest(data));
      },
      []);
    
  return (test ?
    <div>
      <p>{test.name}</p>
      <p>{test.testType}</p>
      <p>{test.viewMode}</p>
      </div> :
    <p>Loading...</p>
  )
};

export default TestSelector;