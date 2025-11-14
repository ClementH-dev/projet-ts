// 1) Partial
// Dans TypeScript, le type utilitaire Partial<T> permet de rendre toutes les propriétés d'un type optionnelles.
interface User {
  id: number;
  name: string;
  email: string;
}
const updateUser = (id: number, updates: Partial<User>): User => {
    // Logique de mise à jour de l'utilisateur
    return { id, ...updates } as User;
}
const user: User = { id: 1, name: "Alice", email: "alice@example.com" };
updateUser(1, { name: "Alicia" });

// 2) Pick
// Le type utilitaire Pick<T, K> permet de créer un nouveau type en sélectionnant un sous-ensemble de propriétés d'un type existant.
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}
type ProductSummary = Pick<Product, 'id' | 'name' | 'price'>;
const getProductSummary = (product: Product): ProductSummary => {
    return { id: product.id, name: product.name, price: product.price };
}

// 3) Omit
// Le type utilitaire Omit<T, K> permet de créer un nouveau type en omettant certaines propriétés d'un type existant.
type ProductWithoutDescription = Omit<Product, 'description'>;
const getProductWithoutDescription = (product: Product): ProductWithoutDescription => {
    const { description, ...rest } = product;
    return rest;
}

// 4) Readonly
// Le type utilitaire Readonly<T> permet de rendre toutes les propriétés d'un type en lecture seule.
interface Config {
    apiUrl: string;
    timeout: number;
}
const config: Readonly<Config> = {
    apiUrl: "https://api.example.com",
    timeout: 5000
};
// config.timeout = 3000; // Erreur : Impossible d'assigner à 'timeout' car c'est une propriété en lecture seule.

// 5) Record
// Le type utilitaire Record<K, T> permet de créer un type d'objet avec des clés de type K et des valeurs de type T.
type Roles = 'admin' | 'user' | 'guest';
type RolePermissions = Record<Roles, string[]>;
const permissions: RolePermissions = {
    admin: ['read', 'write', 'delete'],
    user: ['read', 'write'],
    guest: ['read']
};