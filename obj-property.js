const students = [
    {id: 14, name: 'Omor'},
    {id: 21, name: 'Mannan'},
    {id: 33, name: 'Kabir'}
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>20);
const biggerOne = students.find(s => s.id>20);
console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne);