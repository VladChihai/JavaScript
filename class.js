class Person{
    constructor(firstName, lastname){
        this.firstName = firstName;
        this.Lastname = lastname;
    }
    getfullname(){
        return this.firstName + ' ' + this.lastname; 
    }
}
let Gabriel = new Person("Gabriel", "Caraman");


console.log(Gabriel.firstName)
console.log(Gabriel.getfullname())