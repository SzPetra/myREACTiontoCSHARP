import React from 'react';
import ToggleBtn from './ToggleBtn';
import apiRequest from '../requests/apiRequest';
//import { postOptions } from '../requests/apiRequestOptions';
import { useState, useEffect } from 'react';

const TestData = () => {
const [urle, seturle] = useState(false);
const [listData, setListData] = useState("sss");

const queryString = {name:'tutya'};
const postOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
    body: queryString
};
const [opt, setOpt] = useState(null);
let data;

useEffect(async() => {
    const url = "https://localhost:7275/api/Email";
    const optObj = null;
    console.log(postOptions);
    //const response = await fetch(url, postOptions);
    //data = await response.json();
    //const url1 = "https://localhost:44490/weatherforecast/1";
    //apiRequest(url, [listData, setListData]);
    //apiRequest(url1, [opt, setOpt]);
  }, [urle]);

        return (
            <div>
                <ToggleBtn toggle={[urle, seturle]}/>
                <span>{data}</span>
            </div>
        );
    
};

export default TestData;
