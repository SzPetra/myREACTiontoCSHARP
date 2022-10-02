import React from 'react';
import { useState, useEffect } from 'react';

const TestSelectorPage = () => {
    const [test, setTest] = useState(null);
    const cd ="dsa";

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log(params.data + "dddd")
    useEffect(
      ()=>{
        fetch(`https://localhost:7200/api/Email/DecryptUrl?payload=${params.data}`)
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

export default TestSelectorPage;