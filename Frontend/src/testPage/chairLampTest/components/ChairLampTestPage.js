import React from 'react'
import listOfIcons from './ChairLampIcons';
import "../assets/chairLampTest.css"

const ChairLampTestPage = () => {
    let revisedIcons =0;
    let errors = 0;
    const setIcons = () =>{
        revisedIcons += 1;
        console.log("revisednum" + revisedIcons);};

        const setError = (e, isIconCorrect) =>{
            if(e.key ==="Enter"){
            if(isIconCorrect !== true){
                errors += 1;
            }
            console.log("error num" +errors)
            console.log(isIconCorrect);
        }};

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

  return (
    <div >
        {
                createIcons()
        }
        
    </div>
  )
}

export default ChairLampTestPage
