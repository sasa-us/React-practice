class Human {
    gender = 'male';

    printGender() {
        console.log(this.gender);
    }
}//end class Human


class Person extends Human{
    // constructor() {
        //super();  //use to call constructor from extend class
    name = 'sasa-us';
    gender = 'female';

    //use arrow func
    printMyName = () => {
        console.log(this.name);
    }

} //end class Person

const person = new Person();
person.printMyName();
person.printGender();