let person = {
    firstName:"John",
    lastname:"Doe",
    age : 30
};

let pisica = {
    culoare:"Negru",
    blana:"Are",
    picoare:4
};

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
        console.log("Hi my name is "+this.nume+" "+this.prenume);
        console.log("Hi my name is "+this.nume+" "+"I am"+" "+ this.ani+" "+"years old")

    },

    year50afetr: function(){
        console.log(this.ani+50)
    }
};

eu.sayHI()
eu.year50afetr()

// console.log(eu.nume);
// console.log(eu.prenume);
// console.log(eu.clasa);
// console.log(eu.inaltime);
// console.log(eu.tricou);
// console.log(eu.pantaloni);
// console.log(eu.par);
// console.log(eu.ochi);
// console.log(eu.ani);

// console.log("");
// eu.ani = eu.ani + 4;
// console.log(eu.ani);

// eu.inaltime = eu.inaltime + 20;
// console.log(eu.inaltime);

// eu.par = "cafiniu"
// console.log(eu.par)

// eu.liceul = "Lucian Blaga"
// console.log(eu.liceul)


// delete eu.ochi;

