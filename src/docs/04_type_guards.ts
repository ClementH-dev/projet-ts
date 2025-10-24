// 01) Type Guards
abstract class FantasticCreature {
    constructor(public nom: string) {} 
    abstract utiliserPouvoir(): void;
}

class Dragon extends FantasticCreature {
    utiliserPouvoir(): void {
        console.log(`${this.nom} crache du feu!`);
    }
    voler(): void {
        console.log(`${this.nom} vole dans le ciel!`);
    }
}

class Licorne extends FantasticCreature {
    utiliserPouvoir(): void {
        console.log(`${this.nom} guérit avec sa corne magique!`);
    }
    courir(): void {
        console.log(`${this.nom} court à une vitesse incroyable!`);
    }
}

// Un type guard pour vérifier si une créature est un Dragon
function estDragon(creature: FantasticCreature): creature is Dragon {
    return (creature as Dragon).voler !== undefined;
}

const creatures: FantasticCreature[] = [
    new Dragon("Smaug"),
    new Licorne("Twilight Sparkle"),
];

creatures.forEach((creature) => {
    creature.utiliserPouvoir();
    if (estDragon(creature)) {
        creature.voler();
    } else {
        (creature as Licorne).courir();
    }   
});