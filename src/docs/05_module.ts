// Module 
// Export nommé 
export const moduleName = "Documentation Module";

export function getModuleInfo() {
    return `This is the ${moduleName}.`;
}
// Dans un autre fichier, vous pouvez importer comme suit :
// import { moduleName, getModuleInfo } from './path/to/module';

// Export groupé 
const version = "1.0.0";
const author = "John Doe";

export { version, author };
// Dans un autre fichier, vous pouvez importer comme suit :
// import { version, author } from './path/to/module';

// Export par défaut
export default function greet() {
    return "Hello from the module!";
}
// Dans un autre fichier, vous pouvez importer comme suit :
// import greet from './path/to/module';

// Les imports peuvent également être combinés
// import greet, { moduleName, getModuleInfo, version, author } from './path/to/module';