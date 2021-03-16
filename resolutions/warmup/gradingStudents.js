const gradingStudents = gradesList => {
    const result = [];
    for (let i = 0; i < gradesList.length; i++) {
        
        let grade = gradesList[i];
        const next5Multiple = Math.ceil(grade/5) * 5;  //Find the next 5 multiple.
        
        if (grade >= 38 && (next5Multiple - grade) < 3){
            grade = next5Multiple;
        }

        result.push(grade);
    }

    return result;
} // gradingStudents(gradesList)
debugger;
console.log(gradingStudents([73,67,38,33]));
