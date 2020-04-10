//spread add all old to new one
//... use to split up array or obj 
// const newArr = [...oldArr, 1, 2];
// const newObj = {...oldObj, newProp: 5}; //... use to pull out old



const numbers = [1, 2, 3];
const newNum = [...numbers, 4];
const newNum2 = [numbers, 4];

console.log(newNum);
console.log(newNum2); //get [[1,2,3], 4]

const person = {
    name: 'sa'
};

const newPerson = {
    ...person,
    age: 22
};

console.log(newPerson);

// //Rest
// //use to merge a list of func argument into array
// function sortArgs(...args) {
//     return args.sort();
// }
//you can use array function filter, sort ...
const filter = (...a) => {
    return a.filter(element => element === 1);
}

console.log(filter(1, 2, 3));