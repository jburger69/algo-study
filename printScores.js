function gradeFromScore(score) {
    if ( score >= 90 ) {
        return "A";
    }
    if ( score >= 70 ) {
        return "B";
    }
    if ( score >= 50 ) {
        return "C";
    }
    return "D"
}

function printGrades(scores) {
    for ( let score of scores ) {
        console.log(gradeFromScore(score));
    }
}

let myScores = [96, 34, 67]

printGrades(myScores);