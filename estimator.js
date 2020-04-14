const data = {
  region: {
  name: 'Africa',
  avgAge: 19.7,
  avgDailyIncomeInUSD: 5,
  avgDailyIncomePopulation: 0.71,
},
periodType: 'days',
population: 58,
reportedCases: 674,
timeToElapse:  581434,
totalHospitalBeds: 1380789
};
const covid19ImpactEstimator = (data) => data; {
let elapsedTime,factors,twoPowerFactor,availableBeds,casesForICUByRequestedTime,casesForVentilatorsByRequestedTime,severeDollarsInFlight,impactDollarsInFlight,periodss,impactInfectionsByRequestedTime,Income,Population;
Income=data.region.avgDailyIncomeInUSD;
Population=data.region.avgDailyIncomePopulation;
elapsedTime=data.timeToElapse;
periodss=data.periodType;
//const period =(data) =>data;{
  switch(periodss) {
   case 'days':
      periods=elapsedTime;
      break;
   case 'weeks':
     periods=elapsedTime*7;
     break;
   case 'months':
     periods=elapsedTime*30;
     break;
}
console.log(periods,periodss);
factors=Math.floor(elapsedTime/3);   
twoPowerFactor=Math.pow(2,factors);
availableBeds=Math.floor((data.totalHospitalBeds*0.35));
impactCurrentlyInfected=data.reportedCases*10;
impactInfectionsByRequestedTime=impactCurrentlyInfected * twoPowerFactor;
impactCasesByRequestedTime=Math.floor(impactInfectionsByRequestedTime*0.15);
impactHospitalBedsByRequestedTime=availableBeds-impactCasesByRequestedTime;
impactCasesForICUbyRequestedTime=Math.floor(impactInfectionsByRequestedTime*0.05);
impactCasesForVentilators=Math.floor(0.62*impactInfectionsByRequestedTime);
impactDollarsInFlight=Math.floor((impactInfectionsByRequestedTime*Population*Income)/twoPowerFactor);
//Severe Computation
severeCurrentlyInfected=data.reportedCases*50;
severeInfectionsByRequestedTime=severeCurrentlyInfected*twoPowerFactor;
severeCasesByRequestedTime=Math.floor(severeInfectionsByRequestedTime*0.15);
hospitalBedsByRequestedTime=availableBeds-severeCasesByRequestedTime;
casesForICUByRequestedTime=Math.floor(severeInfectionsByRequestedTime*0.05);
casesForVentilatorsByRequestedTime=Math.floor(severeInfectionsByRequestedTime*0.02);
severeDollarsInFlight=Math.floor((severeInfectionsByRequestedTime*Population*Income)/elapsedTime);
const output= {
  data,
  impact: {
    currentlyInfected: impactCurrentlyInfected,
    infectionsByRequestedTime: impactInfectionsByRequestedTime,
    casesByRequestedTime:impactCasesByRequestedTime,
    hospitalBedsByRequestedTime:impactHospitalBedsByRequestedTime,
    casesForICUReequestedTime: impactCasesForICUbyRequestedTime,
    casesForVentilatorByRequestedTime:impactCasesForVentilators,
    dollasInflight:impactCasesForVentilators
  },
  severeImpact: {
      currentlyInfected: severeCurrentlyInfected,
      infectionsByRequestedTime: severeInfectionsByRequestedTime,
      casesByRequestedTime: severeCasesByRequestedTime,
      hospitalBedsByRequestedTime:hospitalBedsByRequestedTime,
      casesForICUReequestedTime:casesForICUByRequestedTime ,
      casesForVentilatorByRequestedTime:casesForVentilatorsByRequestedTime,
      dollasInflight: severeDollarsInFlight
  }
    };
    console.log(output);
  return output;
};
export default covid19ImpactEstimator;
