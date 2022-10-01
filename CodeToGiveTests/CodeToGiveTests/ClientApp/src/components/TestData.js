import React from 'react';
import ToggleBtn from './ToggleBtn';
import apiRequest from '../requests/apiRequest';
//import { postOptions } from '../requests/apiRequestOptions';
import { useState, useEffect } from 'react';

const TestData = () => {
const [urle, seturle] = useState(false);
const [listData, setListData] = useState(null);
const queryString = "tutya";
const postOptions = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(queryString)
};
const [opt, setOpt] = useState(null);

useEffect(() => {
    const url = "https://localhost:44490/weatherforecast";
    const url1 = "https://localhost:44490/weatherforecast/1";
    apiRequest(url, [listData, setListData], postOptions);
    apiRequest(url1, [opt, setOpt]);
    console.log(opt);
  }, [urle]);

        return (
            <div>
                <ToggleBtn toggle={[urle, seturle]}/>
                <span>{listData}</span>
            </div>
        );
    
};

export default TestData;
