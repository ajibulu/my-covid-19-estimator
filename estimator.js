const covid19ImpactEstimator = (data) => {
  const input = data;
  {
    impact: {
         currentlyInfected: input,
         infectionsByRequestedTime: input,
    
         periodType: input,
         population: input,
    region: {
      avgAge: input,
      avgDailyIncomeInUSD: input,
      avgDailyIncomePopulation: input,
      name: input,
    },
    severeImpact: {
      currentlyInfected:  input,
      infectionsByRequestedTime: input,
    },
    reportedCases: input,
    timeToElapse:  input,
    totalHospitalBeds: input,
    }
  //********************Computation of Estimate
 var numberOfDays,numberOfWeeks,numberOfMonths;
 var convertWeeksToDays,convertMonthsToDays,factorDay,factorWeek,factorMonth;
 const twoPowerFactor,hospitalbedsByRequestedTime,availableBeds,casesForICUByRequestedTime,casesForVentilatorsByRequestedTime;dollarsInFlight; 
 convertWeeksToDay=numberOfWeeks*7;
 convertMonthsToDays=numberOfMonths*30;
 factorDay=Math.trunc(numberOfDays/3);
 factorWeek=Math.trunc(convertWeeksToDays/3);
 factorMonth=Math.trunc(convertMonthsToDays/3);
 switch (periodType){
   case 'days':
    twoPowerFactor=Math.pow(2,factorDay);
    impact.currentlyInfected=(reportedCases*numberOfDays)*10;
    severeImpact.currentlyInfected=(reportedCases*numberOfDays)*50;
    break;
   case 'weeks':
    twoPowerFactor=Math.pow(2,factorWeek);
    impact.currentlyInfected=(reportedCases*convertWeeksToDays)*10;
    severeImpact.currentlyInfected=(reportedCases*convertWeeksToDays)*50;
    break;
   case 'months':
    twoPowerFactor=Math.pow(2,factorMonth);
    impact.currentlyInfected=(reportedCases*convertMonthsToDays)*10;
    severeImpact.currentlyInfected=(reportedCases*convertedMonthsToDays)*50;
    break;

 }
 //impact.currentlyInfected=reportedCases*10;
// severeImpact.currentlyInfected=reportedCases*50;
 impact.infectionsByRequestedTime=impact.currentlyInfected*twoPowerFactor;
 severeImpact.infectionsByRequestedTime=severeImpact.currentlyInfected*twoPowerFactor;

 

 //Challenge 2
 severeCasesByRequestedTime=severeImpact.infectionsByRequestedTime*0.15;
 availableBeds=totalHospitalBeds*0.35;
 hospitalBedsByRequestedTime=availableBeds-severeCasesByRequestedTime;


 // Challenge 3
casesForICUByRequestedTime=severeImpact.infectionsByRequestedTime*0.05;
casesForVentilatorsByRequestedTime=severeImpact.infectionsByRequestedTime*0.02;
dollarsInFlight=severeImpact.infectionsByRequestedTime*region.avgDailyIncomePopulation*avgDailyIncomeInUSD*30;


return {
  data: input,
  severeCasesByRequestedTime,
  hospitalbedsByRequestTime,
  severeImpact: {},
  impact: {},
  casesForICUByRequestedTime,
  casesForVentilatorsByRequestedTime,
  dollarsInFlight

}

};
export default covid19ImpactEstimator;
