import React from "react";


const apiRequest = async (url='', [fetchItem, setfetchItem], optionsObj=null, [opt,setOpt]=null, errMsg=null) => {
    try {
        const response = await fetch(url, optionsObj);
        console.log(response.body);
        if (!response.ok) throw Error('Error occoured. Reload the app');
        if (optionsObj === null) {
            const data = await response.json();
            setfetchItem(data);
        }
  

    } catch (error) {
        errMsg = error.message;
    } finally {
        return  errMsg;
    }
};

export default apiRequest;