
export const getLvlName = (int) => {
    switch (int) {
        case 0:
            return "Aucun";
        case 1:
            return "Débutant";
        case 2:
            return "Intermediaire";
        case 3:
            return "Avancé";
        case 4:
            return "Expert";    
        default:
            "Aucun";
    }
}

export const getLvlInt = (name) => {
    switch (name) {
        case "Aucun":
            return 0;
        case "Débutant":
            return 1;
        case "Intermediaire":
            return 2;
        case "Avancé":
            return 3;
        case "Expert":
            return 4;    
        default:
            0;
    }
}