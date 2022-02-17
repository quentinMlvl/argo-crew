import db from "../config/db.js";

export const getSailors = (res) => {
    db.query("SELECT * FROM Sailors", (err, sailors) => {
        if (err) {
            console.log(err); 
            res(err, null);
        } else res(null, sailors);
    })
}

export const getSailor = (id, res) => {
    db.query("SELECT * FROM Sailors WHERE id = ?", [id], (err, sailor) => {
        if (err) {
            console.log(err); 
            res(err, null);
        } else res(null, sailor[0]);
    })
}


export const insertSailor = (data, res) => {
    db.query("INSERT INTO Sailors SET ?", [data], (err, results) => {
        if (err) {
            console.log(err); 
            res(err, null);
        } else res(null, results);
    })
}


export const updateSailor = (data, id, res) => {
    console.log(data);
    db.query("UPDATE Sailors SET name = ?, age = ?, role = ?, swim_lvl = ?, fight_lvl = ?, lead_lvl = ? WHERE id = ?", [data.name, data.age, data.role, data.swim_lvl, data.fight_lvl, data.lead_lvl, id], (err, results) => {
        if (err) {
            console.log(err); 
            res(err, null);
        } else res(null, results);
    })
}

export const deleteSailor = (id, res) => {
    db.query("DELETE FROM Sailors WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err); 
            res(err, null);
        } else res(null, results);
    })
}