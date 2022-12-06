//1- Learn About Functional Programming
const prepareTea = () => 'greenTea';
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC);

//2- Understand Functional Programming Terminology
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';
const getTea2 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4GreenTeamFCC = getTea2(prepareGreenTea,27);
const tea4BlackTeamFCC = getTea2(prepareBlackTea,13);
console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

//3 Understand the Hazards of Using Imperative Code
