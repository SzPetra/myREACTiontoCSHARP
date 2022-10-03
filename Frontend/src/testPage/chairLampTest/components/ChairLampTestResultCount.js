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