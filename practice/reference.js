const person = {
    name: 'sa'
};

const person2 = person; //reassign = copy pointer not the value
const person3 = {  //use spread operator. pull out its property&val create new obj/arr and copy the property, not entire obj
    ...person      
}

person.name = 'aa';

console.log(person2);
console.log(person3);