// we uses create new instances when we don't wanted to create multiple objects of same properties and methods
// rather we'll create a single class in which all objects will have same properties and methods in that specific class


// FOR CREATING CLASS
class Students {
    // in constructor we've to put all the properties 
    constructor(name) {
        this.myname = name; // (this.) is referring to the the Students as Students is the owner
    }

    // INSTANCE method so we can use this in child class as well if we uses STATIC method then we can't use that in child class
    biodata() {
        return `hello my nmae is ${this.myname}`;
    }
}

// linking new class with the parent class
// and we've to use super() method whenever we linked them
class Player extends Students {
    constructor(name, game){
        super(name);
        this.mygame = game;
    }
    player_biodata() {
        return `${super.biodata()}. I play ${this.mygame}`
    }
}

let objA = new Player("Huzi", "Football");
console.log(objA.player_biodata());