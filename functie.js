let eu = {
    nume:"Vlad",
    prenume:"Chihai",
    clasa:"X",
    inaltime:168,
    tricou:"Hanorac Gri",
    pantaloni:"Verzi",
    par:"negru",
    ochi:"albastri",
    ani:16,

    //funcite
    sayHI: function(){
        console.log("Hi my name is " + this.nume +  " " + this.prenume );
    },
};

eu.sayHI()