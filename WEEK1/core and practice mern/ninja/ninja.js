class Ninja { 
    constructor ( name){
    this.name = name;
    this.health= 100;
    this.speed = 3;
    this.strengh = 3;
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(`name: ${this.name}`,`Health: ${this.health}`,`strengh: ${this.strengh}`,`speed: ${this.speed}`);
    }
    drinksake(){
        this.health += 10
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinksake();
ninja1.showStats();
