// 01) Notion de classe

class Voitures {
    // Propriétés
    marque: string;
    vitesse: number = 0;

    constructor(marque: string) {
        this.marque = marque;
    }

    accelerer():void {
        this.vitesse += 10;
    }

    afficherVitesse():void {
        console.log(`${this.marque} roule à ${this.vitesse} km/h.`);
    }
}

const v1 = new Voitures("Peugeot");
v1.accelerer();
v1.afficherVitesse();

// 02) Modificateurs d'accès
class CompteBancaire {
    private solde: number = 0

    deposer(montant: number):void {
        this.solde += montant;
    }

    consulterSolde():void {
        console.log(`Solde du compte: ${this.solde} €`);
    }
}

const compte = new CompteBancaire();
compte.deposer(100);
compte.consulterSolde();
// compte.solde = 500; // Erreur : La propriété 'solde' est privée et n'est accessible que dans la classe 'CompteBancaire'.


// 03) Classes abstraites
abstract class Animal {
    constructor(public nom: string) {}

    abstract crier():void;
    
    soigner?():void

    voler?():void;

    manger():void {
        console.log(`${this.nom} est en train de manger.`);
    }

}

class Chien extends Animal {
    crier():void {
        console.log(`${this.nom} dit: Woof Woof!`);
    }

    soigner():void {
        console.log(`${this.nom} est soigné par le vétérinaire.`);
    }
}

class Chat extends Animal {
    crier():void {
        console.log(`${this.nom} dit: Miaou Miaou!`);
    }
}

class Oiseau extends Animal {
    crier():void {
        console.log(`${this.nom} dit: Cui Cui!`);
    }
    voler():void {
        console.log(`${this.nom} vole dans le ciel.`);
    }  
}

const animaux: Animal[] = [
    new Chien("Rex"), 
    new Chat("Whiskers"), 
    new Oiseau("Tweety")
];

animaux.forEach((animal) => {
    animal.crier();
    animal.manger();
    if (animal.soigner) {
        animal.soigner();
    }
    if (animal.voler) {
        animal.voler();
    }
});

// 04) Expression de classe
const VoitureSport = class {
    constructor(public modele: string) {}

    demarrer():void {
        console.log(`${this.modele} démarre en trombe!`);
    }
};

const maVoiture = new VoitureSport("Ferrari");
maVoiture.demarrer();
