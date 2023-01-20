// code your solution here


const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ]




  let yearWon = record.find(result => result === "W");

function superBowlWin(record) {
    return yearWon;
}

superBowlWin();