export const performancePercentageCount = (sumOfRevisedIcons, sumOfErrors) =>{
    let performancePercentageNum = (sumOfRevisedIcons-sumOfErrors)/sumOfRevisedIcons * 100;
    let performancePercentageString = "";
   
    if(performancePercentageNum > 97){
        performancePercentageString = parseInt(performancePercentageNum)+"% = Ok";
    }
    else if(performancePercentageNum <= 97 && performancePercentageNum > 95 ){
        performancePercentageString = parseInt(performancePercentageNum)+"% = Under the average";
    }
    else{
        performancePercentageString = parseInt(performancePercentageNum)+"% = Attention disorder";
    }
    return performancePercentageString;
};

export const extentOfAttentionCount = (revisedIconsByMinute) =>{
    let minRevised = Math.min.apply(Math, revisedIconsByMinute);
    let maxRevised = Math.max.apply(Math, revisedIconsByMinute);
    return `extent of attention = ${maxRevised-minRevised}`
};

export const qualityOfAttetionCount = (revisedIconsByMinute, errorsByMinute,sumOfRevisedIcons, sumOfErrors) =>{
    let qualityOfAttetionString = "";
    for(let i=0; i<revisedIconsByMinute.length; i++){
        let qualityOfAttetionStringByMinute = `minute ${i+1} = ${parseInt(errorsByMinute[i] / revisedIconsByMinute[i]*100)} \n`;
        qualityOfAttetionString += qualityOfAttetionStringByMinute;
    }
        let totalNumString = `Total = ${parseInt(sumOfErrors / sumOfRevisedIcons *100)}`;
        qualityOfAttetionString += totalNumString;
        return qualityOfAttetionString
};