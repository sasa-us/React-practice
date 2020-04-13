class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}//end class Human


class Person extends Human{
    constructor() {
        super();  //use to call constructor from extend class
        this.name = 'sasa-us';
        this.gender = 'female';
    }

    printMyName() {
        console.log(this.name);
    }

} //end class Person

const person = new Person();
person.printMyName();
person.printGender();