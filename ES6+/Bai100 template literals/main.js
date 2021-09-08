const courseName = 'Javascript';
const description = 'Course name: ' + courseName;
console.log(description);
// -> "Course name: Javascript"

const courseName = 'Javascript';
const description = `Course name: ${courseName}`;
console.log(description);
// -> "Course name: Javascript"

const courseName = 'Javascript';
const courseName2 = 'PHP';
const description = `Course name: ${courseName} ${courseName2}`;
console.log(description);
// -> "Course name: Javascript PHP"

const lines = 'Line 1\nLine2';
console.log(lines);
// -->  Line 1
//      Line 2

const lines = 'Line 1\n' + 'Line 2\n' + 'Line 3\n';
console.log(lines);
// -->  Line 1
//      Line 2
//      Line 3

const lines = `Line 1
Line 2
Line 3`;
console.log(lines);
// -->  Line 1
//      Line 2
//      Line 3
