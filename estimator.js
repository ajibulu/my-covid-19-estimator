const covid19ImpactEstimator = (data) => {
const input=data;
input = {
  region: {
  name: 'Africa',
  avgAge: 19.7,
  avgDailyIncomeInUSD: 5,
  avgDailyIncomePopulation: 0.71,
},
periodType: 'days',
population: 58,
reportedCases: 674,
timeToElapse:  66622705,
totalHospitalBeds: 1380614
};
var elapsedTime,factors,twoPowerFactor,availableBeds,casesForICUByRequestedTime,casesForVentilatorsByRequestedTime,dollarsInFlight; 
elapsedTime=input.timeToElapse;
const period =() => {
   switch(input.periodType) {
    case 'days':
       periods=elapsedTime;
       return periods;
    case 'weeks':
      periods=elapsedTime*7;
      return periods;
    case 'months':
      periods=elapsedTime*30;
      return periods;
   }
   period();
   const factor =() => {
       factors=Math.trunc((elapsedTime/3));   
       twoPowerFactor=Math.pow(2,factors);
       return twoPowerFactor;
   };
   factor();
   const beds= ()=> {
    availableBeds=Math.trunc((input.totalHospitalBeds*0.35));
    return availableBeds;
   };
   beds();
   const estimates =()=> {
     impactCurrentlyInfected=input.reportedCases*10;
     impactInfectionsByRequestedTime=impactCurrentlyInfected * factor();
     severeCurrentlyInfected=input.reportedCases*50;
     SevereInfectionsByRequestedTime=severeCurrentlyInfected*factor();
 };
twoPowerFactor=Math.pow(2,factors);
severeCasesByRequestedTime=input.severeImpact.infectionsByRequestedTime*0.15;
availableBeds=input.totalHospitalBeds*0.35;
hospitalBedsByRequestedTime=availableBeds-severeCasesByRequestedTime;
casesForICUByRequestedTime=input.severeImpact.infectionsByRequestedTime*0.05;
casesForVentilatorsByRequestedTime=input.severeImpact.infectionsByRequestedTime*0.02;
dollarsInFlight=(input.severeImpact.infectionsByRequestedTime*input.region.avgDailyIncomePopulation*input.avgDailyIncomeInUSD)/input.timeToElapse;
const output= {
  input,
  impact: {
    currentlyInfected: impactCurrentlyInfected,
    infectionsByRequestedTime: impactInfectionsByRequestedTime
  },
  severeImpact: {
      currentlyInfected: severeCurrentlyInfected,
      infectionsByRequestedTime: SevereInfectionsByRequestedTime
  }
    };
  return output;
  estimates();
  
 };
};
export default covid19ImpactEstimator;
