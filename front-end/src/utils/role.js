
export const getRoleName = (value) => {
    switch (value) {
        case "CANDIDATE":
            return "Candidat";
        case "SAILOR":
            return "Marin";
        case "LIEUTENANT":
            return "Lieutenant";
        case "CAPTAIN":
            return "Capitaine";
        default:
            "Candidat";
    }
}
export const getRoleValue = (name) => {
    switch (name) {
        case "Candidat":
            return "CANDIDATE";
        case "Marin":
            return "SAILOR";
        case "Lieutenant":
            return "LIEUTENANT";
        case "Capitaine":
            return "CAPTAIN";
        default:
            "CANDIDATE";
    }
}