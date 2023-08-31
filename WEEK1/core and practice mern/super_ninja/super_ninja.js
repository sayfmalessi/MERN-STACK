class Ninja {
    constructor(name){
        this.name=name;
        this.health=100;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log("Name: "+this.name+", Strength: "+this.strength+", Speed: "+this.speed+", Health: "+this.health);
    }
    drinkSake(){
        this.health+=10;
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health+=100;
        this.speed+=7;
        this.strength+=7;
        this.wisdom=10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
