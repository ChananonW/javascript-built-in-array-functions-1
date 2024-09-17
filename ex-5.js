const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
const totalScore = students.reduce((accumulator, student) => accumulator + student.score, 0);


const averagetScore = totalScore / students.length
return averagetScore;
}

const averageScore = getAverageStudentScore(students);
console.log(averageScore)
