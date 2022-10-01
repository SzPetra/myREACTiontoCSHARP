import React from 'react';
import ToggleBtn from './ToggleBtn';
import apiRequest from '../requests/apiRequest';
import apiRequestOptions from '../requests/apiRequest';
import { useState, useEffect } from 'react';

const TestData = () => {
const [urle, seturle] = useState("tutya");
  

    if (urle === "tutya") {
        return (
            <ToggleBtn toggle={[urle, seturle]}/>
        );
    } else {
        return (
        <div>
            TestData
            <ToggleBtn toggle={[urle, seturle]}/>
            {urle}
        </div>
        )
    }
};

export default TestData;
