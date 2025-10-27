// 1) Définition d'une interface
interface Utilisateur {
  nom: string;
  age: number;
  email?: string; // Propriété optionnelle
}

// Exemple d'utilisation de l'interface
const utilisateur1: Utilisateur = {
  nom: "Alice",
  age: 28,
  email: "alice@example.com",
};

const utilisateur2: Utilisateur = {
  nom: "Bob",
  age: 35,
};

// 2) Methodes dans une interface
interface Calculateur {
  additionner(a: number, b: number): number;
  soustraire(a: number, b: number): number;
}

// Exemple d'implémentation de l'interface
const simpleCalculateur: Calculateur = {
  additionner(a: number, b: number): number {
    return a + b;
  },
  soustraire(a: number, b: number): number {
    return a - b;
  },
};
console.log(simpleCalculateur.additionner(5, 3)); // 8
console.log(simpleCalculateur.soustraire(10, 4)); // 6

// 3) Héritage d'interfaces
interface Employe extends Utilisateur {
  poste: string;
  salaire: number;
}

// Exemple d'utilisation de l'interface étendue
const employe1: Employe = {
  nom: "Charlie",
  age: 30,
  poste: "Développeur",
  salaire: 60000,
};
