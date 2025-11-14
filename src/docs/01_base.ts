// 1) Variables immuables / muables
const immutableVar = "Je ne peux pas changer"; // préférer const quand possible
let mutableVar = "Je peux changer";
mutableVar = "Changement effectué";

// 2) Types primitifs
const message: string = "Hello, TypeScript!";
const prix: number = 19.99;
const disponible: boolean = true;

// 3) any vs unknown
// `any` désactive le contrôle de type (éviter si possible).
const listeAny: any = [1, "deux", true];
// `unknown` est sûr : il oblige à vérifier/affirmer le type avant d'utiliser.
const valeurInconnue: unknown = "une chaîne";

// Exemple de vérification pour `unknown`
if (typeof valeurInconnue === "string") {
  // TypeScript infère `valeurInconnue` comme string dans ce bloc
  const longueur = valeurInconnue.length;
}

// 4) Tableaux et tuples
const fruits: string[] = ["pomme", "banane", "orange"];
const nombres: Array<number> = [1, 2, 3, 4, 5];
const duo: [string, number] = ["Alice", 30];
console.log(`Nom: ${duo[0]}, Âge: ${duo[1]}`);
// Readonly tuple
const trio: readonly [string, number, boolean] = ["Bob", 25, true];
// trio[0] = "Charlie"; // Erreur : impossible de modifier un tuple en lecture seule
// Tuple + Labels
const coordonnees: [x: number, y: number] = [10, 20];

// 5) Objets
const personne: { nom: string; age: number } = { nom: "Bob", age: 25 };

// 6) Void
function helloWorld(nom: string): void {
  console.log(`Hello, ${nom}!`);
}
helloWorld("World"); //Une fonction void ne retourne rien

// 7) Never
function lancerErreur(message: string): never {
  throw new Error(message);
}
// lancerErreur("Ceci est une erreur!"); // Une fonction never ne termine jamais normalement

// 8) Typage génériques
function identite<T>(valeur: T): T {
  return valeur;
}

identite<string>("Bonjour"); //T = string
identite<number>(42); //T = number

// 8.1) Typage générique avec tableaux
function getFirstString<T>(arr: T[]): T {
  return arr[0];
}

const a = getFirstString<string>(["Alice", "Bob", "Charlie"]); //T = string
const b = getFirstString<number>([10, 20, 30]); //T = number

// 9) Inférence de types
let nombreInfere = 100; // TypeScript infère que c'est un number
// nombreInfere = "cent"; // Erreur : Type 'string' n'est pas assignable au type 'number'

function addition(a: number, b: number) {
  // a et un number et b aussi donc typescript comprend que la fonction retourne un number
  return a + b;
}

let resultat = addition(5, 10);

let total; //Type any implicite ATTENTION à éviter
total = 50;
total = "cinquante";

// 9) Union et narrowing
let unionVar: string | number;
unionVar = "Ceci est une chaîne";
unionVar = 12345;
// unionVar = true; // Erreur : Type 'boolean' n'est pas assignable au type 'string | number'

type ID = string | number;
function afficherID(id: ID): void {
  console.log(`ID: ${id}`);
}

afficherID("abc123");
afficherID(456789);

// 9.1) Narrowing
function formatId(id: string | number): string {
  if (typeof id === "number") {
    return "#" + id.toString();
  }
  return id.toUpperCase();
}

console.log(formatId("abc123")); // "ABC123"
console.log(formatId(456)); // "#456"

// 10) Intersection de types
interface A {
  propA: string;
}

interface B {
  propB: number;
}

type C = A & B;
// Objet de type C doit avoir les propriétés de A et B
const objetC: C = {
  propA: "Valeur A",
  propB: 42,
};

console.log(`propA: ${objetC.propA}, propB: ${objetC.propB}`);

// 11) JSDOC
/**
 * Calcule la somme de deux nombres.
 * @param a - Le premier nombre.
 * @param b - Le deuxième nombre.
 * @returns La somme de a et b.
 * @example
 * ```
 * const resultat = somme(5, 10);
 * console.log(resultat); // Affiche 15
 * ```
 * @deprecated Utilisez la fonction `addition` à la place.
 * @throws {Error} Lance une erreur si les arguments ne sont pas des nombres.
 * @see {@link addition} pour une fonction similaire.
 */
function somme(a: number, b: number): number {
  return a + b;
}

console.log(`La somme de 5 et 10 est: ${somme(5, 10)}`);

// TypeDoc permet de générer automatiquement la documentation à partir des commentaires JSDoc.
// npm install typedoc --save-dev

// Ajouter un script dans package.json:
// "scripts": {
//   "docs": "typedoc"
// }

// Configurer TypeDoc via un fichier typedoc.json
// {
//   "entryPoints": ["src/main.ts"],
//   "out": "docs",
//   "exclude": "**/node_modules/**",
//   "includeVersion": true
//   "theme": "default"
// }

// Puis exécuter:
// npm run docs


