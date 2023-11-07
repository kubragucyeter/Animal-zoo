let a;
class Animal {
    constructor(isLive, isBreath, isWalk, isSleep, dogsound, catsound, fishsound) {
        this.isLive = isLive;
        this.isBreath = isBreath;
        this.isWalk = isWalk;
        this.isSleep = isSleep;

        this.dogsound = dogsound;
        this.catsound = catsound;
        this.fishsound = fishsound;
    };

    allAnimalInformation() {
        console.log(`Hayvanların ortak özellikleri : ${this.isLive} ${this.isBreath}  ${this.isWalk}  ${this.isSleep}`);
    }

    specificAnimalInfo(animal) {
        switch(animal){
            case "dog":
                console.log('hav');
                console.log("10 ila 13 yıl yaşarlar");
                break;
            case "cat":
                console.log('meow');
                console.log("8 ila 10 yıl yaşarlar");
                break;
            case "fish":
                console.log('blub');
                console.log("2 ila 5 yıl yaşarlar");
                break;
        }
    }

}
const animal = new Animal("yaşıyorlar,", "nefes alıyorlar,", "yürüyorlar,", "uyuyorlar.");
animal.allAnimalInformation();

class Dog extends Animal {
    constructor(brand, bark, smell, dogsound) {

        super(brand, bark, smell, dogsound);
        this.bark = bark;
        this.smell = smell;

    };

    dogInformation() {
        console.log(`Köpeğin kendi özellikleri : ${this.bark} ${this.smell}`);
    }
}

const dog = new Dog("", "havlamak,", "koku alma");
dog.dogInformation();
dog.specificAnimalInfo("dog");

class Cat extends Animal {
    constructor(brand, meow, reflex, catsound) {

        super(brand, meow, reflex, catsound);
        this.meow = meow;
        this.reflex = reflex;

    };

    catInformation() {
        console.log(`Kedinin kendi özellikleri : ${this.meow} ${this.reflex}`);
    }
}

const cat = new Cat("", "miyavlamak,", "refleks");
cat.catInformation();
cat.specificAnimalInfo("cat");


class Fish extends Animal {
    constructor(brand, distill, double_eyed, fishsound) {

        super(brand, distill, double_eyed, fishsound);
        this.distill = distill;
        this.double_eyed = double_eyed;

    };

    fishInformation() {
        console.log(`Balığın kendi özellikleri : ${this.distill} ${this.double_eyed}`);
    }
}

const fish = new Fish("", "'damıtmak',", "çift göz");
fish.fishInformation();
fish.specificAnimalInfo("fish");



