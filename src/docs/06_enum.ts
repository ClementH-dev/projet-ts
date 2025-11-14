// Enumérations
enum Direction {
    Nord,
    Sud,
    Est,
    Ouest
}

// Utilisation de l'énumération
let maDirection: Direction = Direction.Nord;
console.log(`Ma direction est: ${Direction[maDirection]}`); // Affiche "Ma direction est: Nord"

// Enumérations avec valeurs personnalisées
enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}

let currentStatus: Status = Status.Success;
console.log(`Le statut est: ${currentStatus}`); // Affiche "Le statut est: 200"

// Enumérations avec chaînes de caractères
enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}
let userRole: Role = Role.Admin;