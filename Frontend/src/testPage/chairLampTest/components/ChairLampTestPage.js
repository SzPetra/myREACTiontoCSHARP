import React from 'react'
import listOfIcons from './ChairLampIcons';
import "../assets/chairLampTest.css"
import Timer from './Timer';
import { extentOfAttentionCount, performancePercentageCount, qualityOfAttetionCount } from './ChairLampTestResultCount';

const ChairLampTestPage = () => {
  
    const [page, setPage] = React.useState(0);
    let [revisedIconsState, setRevisedIconsState] = React.useState(0);
    let [errorsState, setErrorState] = React.useState(0);
    let [revisedIconsByMinuteState, setrevisedIconsByMinuteState] = React.useState([]);
    let [errorsByMinuteState, seterrorsByMinuteState] = React.useState([]);
    let revisedIcons = revisedIconsState;
    let errors = errorsState;
    let revisedIconsByMinute = revisedIconsByMinuteState;
    let errorsByMinute = errorsByMinuteState;

    const setIcons = () =>{
        
        revisedIcons += 1;
        console.log("revisednum: " + revisedIcons);};

        const setError = (e, isIconCorrect) =>{
            if(e.key ==="Enter"){
            if(isIconCorrect !== true){
                errors += 1;
            }
            console.log("error num: " +errors)
        }};

    const handleMinute = (second, minute) =>{
        if(second === "00" && minute !== "05" && revisedIcons >0){
            revisedIconsByMinute.push(revisedIcons);
            errorsByMinute.push(errors);
            revisedIcons = 0;
            errors = 0;

        }
        if(second === "00" && minute === "00" && revisedIconsByMinute.length !== 0){
            console.log("Hey")
            calculateResults();
        }

    }

    const calculateResults = () =>{
        let sumOfRevisedIcons = revisedIconsByMinuteState.reduce((result,number)=> result+number);
        let sumOfErrors = errorsByMinuteState.reduce((result,number)=> result+number);
        let performancePercentage = performancePercentageCount(sumOfRevisedIcons, sumOfErrors);
        let extentOfAttenton = extentOfAttentionCount(revisedIconsByMinuteState);
        let qualityOfAttetion = qualityOfAttetionCount(revisedIconsByMinuteState, errorsByMinuteState,sumOfRevisedIcons, sumOfErrors);
        console.log(qualityOfAttetion);
        console.log(performancePercentage);
        console.log(extentOfAttenton);
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
      }

    const createIcons = () => {
        let arr =[]
        for(let i=1; i<= 209; i++){
            let iconObject=listOfIcons[getRandomInt(1,16)]
            arr.push(
                        <iconObject.icon
                            className='icon'
                            onFocus={() => setIcons()}
                            onKeyPress={(e)=> setError(e,iconObject.correct)}
                            tabIndex={i}
                            key={i}
                        />
            )
        }
        return(<div
            className='charLampicons-container'>
            {arr.map(icon=>icon)}
        </div>)
    }

    const setPageNum = () => {
        setRevisedIconsState(revisedIconsState = revisedIcons);
        setErrorState(errorsState = errors);
        setrevisedIconsByMinuteState(revisedIconsByMinuteState = revisedIconsByMinute);
        seterrorsByMinuteState(errorsByMinuteState = errorsByMinute);
        console.log(revisedIconsByMinute);
        setPage(page + 1);

    }

  return (
    <div >
         <Timer
            handleMinute = {handleMinute}
        />
        {
                createIcons()     
        }
          <button type="button" onClick={setPageNum}>NextPage</button>
        
    </div>
  )
}

export default ChairLampTestPage
