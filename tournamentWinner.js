const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]
const results = [0,0,1]

const HOME_TEAM_WON = 1;

// O(n) time | O(k) space - where n is the number
// of competitions and k is the number of teams

function tournamentWinner(competitions, results) {
    let currentBestTeam = '';
    const scores = {[currentBestTeam]: 0};

    for (let idx = 0; idx < competitions.length; idx++) {
        const result = results[idx];
        console.log(result)
        const [homeTeam, awayTeam] = competitions[idx];

        const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

        updateScores(winningTeam, 3, scores);

        if (scores[winningTeam] > scores[currentBestTeam]) {
            currentBestTeam = winningTeam;
        }
    }
    console.log(currentBestTeam);
    return currentBestTeam;
}

function updateScores(team,points,scores) {
    if (!(team in scores)) scores[team] = 0;

    scores[team] += points;
}

tournamentWinner(competitions, results)



// [
//     ["HTML", "C#"], => 0      results = [0, 0, 1]
//     ["C#", "Python"], => 0
//     ["Python", "HTML"] => 1
// ]

// HTML   C#   Python
//   0    3      3
//               6

// Python wins