const covid19ImpactEstimator = (data) => data
const input = {
impact: {
  currentlyInfected:45,
  infectionsByRequestedTime:434
},
region: {
  name: 'Africa',
  avgAge: 19.7,
  avgDailyIncomeInUSD: 5,
  avgDailyIncomePopulation: 0.71,
},
severeImpact: {
  currentlyInfected:45,
  infectionsByRequestedTime:344
},
periodType: 'days',
population: 58,
reportedCases: 674,
timeToElapse:  66622705,
totalHospitalBeds: 1380614
};

  //********************Computation of Estimate
 const elapsedTime,factors,twoPowerFactor,availableBeds,casesForICUByRequestedTime,casesForVentilatorsByRequestedTime;dollarsInFlight; 
 elapsedTime=input.timeToElapse;

 const period =() => {
   switch(input.periodType) {
    case 'days':
       periods=elapsedTime;
       return periods;
       break;
    case 'weeks':
      periods=elapsedTime*7;
      return periods;
      break;
    case 'months':
      periods=elapsedTime*30;
      return periods;
      break;  
   }
   period();

  //calculating factor
   const factor =() => {
       factors=Math.trunc((elapsedTime/3));   
       twoPowerFactor=Math.pow(2,factors);
       return twoPowerFactor;
   };
   factor();

   //Calculating Beds Space
   const beds= ()=> {
    availableBeds=Math.trunc((input.totalHospitalBeds*0.35));
    return availableBeds;
   };
   beds();
   //Calculating Estimates
   const estimates =()=> {
     impactCurrentlyInfected=input.reportedCases*10;
     impactInfectionsByRequestedTime=impactCurrentlyInfected * factor();
     severeCurrentlyInfected=input.reportedCases*50;
     SevereInfectionsByRequestedTime=severeCurrentlyInfected*factor();
   }

 };
 
 
 twoPowerFactor=Math.pow(2,factors);
 

 //Challenge 2
 severeCasesByRequestedTime=input.severeImpact.infectionsByRequestedTime*0.15;
 availableBeds=input.totalHospitalBeds*0.35;
 hospitalBedsByRequestedTime=availableBeds-severeCasesByRequestedTime;


 // Challenge 3
casesForICUByRequestedTime=input.severeImpact.infectionsByRequestedTime*0.05;
casesForVentilatorsByRequestedTime=input.severeImpact.infectionsByRequestedTime*0.02;
dollarsInFlight=(input.severeImpact.infectionsByRequestedTime*input.region.avgDailyIncomePopulation*input.avgDailyIncomeInUSD)/input.timeToElapse;

const output {
  input,
  impact: {
    currentlyInfected: impactCurrentlyInfected,
    infectionsByRequestedTime: impactInfectionsByRequestedTime
  },
  severeImpact: {
  severeCasesByRequestedTime,
  hospitalbedsByRequestTime,
    severeImpact: {
      currentlyInfected: severeCurrentlyInfected,
      infectionsByRequestedTime: SevereInfectionsByRequestedTime
    }
    };
    return output;
  };
 estimates();
export default covid19ImpactEstimator;
