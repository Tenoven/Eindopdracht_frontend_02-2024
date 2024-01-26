
function diceRoller() {
    // generate a random number between 1 and 6
    return Math.floor(Math.random() * (7-1) + 1)
}

export function statCalculator() {
    let statArray = []
    let finalStat = 0

    // generate 4 random numbers, put them in an array
    for (let i = 0; i < 4; i++) {
      statArray.push(diceRoller())
    }

    // sort the numbers,
    statArray.sort((a, b) => a-b);

    // remove the index 0
    statArray.splice(0,1)

    // add remaining numbers together as one and return
    finalStat= statArray.reduce((partialSum, a) => partialSum + a, 0);

    return finalStat

}

