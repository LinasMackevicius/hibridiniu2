// helpers.js
export const sumTheScoresOfTheDriver = (raceResults) => {
    if (!raceResults) return 0;
    
    // Calculate the total tandem points for a driver
    return raceResults.reduce((totalPoints, race) => totalPoints + race.tandem_points, 0);
  };