const covid19ImpactEstimator = (data) => {
  const input = data;
      impact: {
      currentlyInfected: input,
      infectionsByRequestedTime: input,
    periodType: input,
    numberOfDays:input,
    numberOfWeeks:input,
    numberOfMonths:input,
    population: input,
    region: {
      avgAge: input,
      avgDailyIncomeInUSD: input,
      avgDailyIncomePopulation: input,
      name: input,
    };
    severeImpact: {
      currentlyInfected:  input,
      infectionsByRequestedTime: input,
    },
    reportedCases: input,
    timeToElapse:  input,
    totalHospitalBeds: input

    }
 
  
 //********************Computation of Estimate
 
 //challenge 1
 var convertWeeksToDays,convertMonthsToDays,factorDay,factorWeek,factorMonth;
 const twoPowerFactor,hospitalbedsByRequestedTime,availableBeds,casesForICUByRequestedTime,casesForVentilatorsByRequestedTime;dollarsInFlight; 
 convertWeeksToDay=numberOfWeeks*7;
 convertMonthsToDays=numberOfMonths*30;
 factorDay=Math.trunc(numberOfDays/3);
 factorWeek=Math.trunc(convertWeeksToDays/3);
 factorMonth=Math.trunc(convertMonthsToDays/3);

 impact.currentlyInfected=reportedCases*10;
 severeImpact.currentlyInfected=reportedCases*50;
 //Period Type

 switch (periodType){
   case "days":
    twoPowerFactor=Math.pow(2,factorDay);
    break;
   case "weeks":
    twoPowerFactor=Math.pow(2,factorWeek);
    break;
   case "months":
    twoPowerFactor=Math.pow(2,factorMonth);
    break;

 }
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
