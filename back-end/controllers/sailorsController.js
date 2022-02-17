import { getSailors, getSailor, insertSailor, updateSailor, deleteSailor } from "../models/sailorsModels.js";

export const showSailors = (req, res) => {
    getSailors((err, sailors) => {
        (err) ? res.send(err) : res.json(sailors);
    })
}


export const showSailor = (req, res) => {
    getSailor(req.params.id, (err, sailor) => {
        (err) ? res.send(err) : res.json(sailor);
    })
}

export const addSailor = (req, res) => {
    const data = req.body.sailor;
    insertSailor(data, (err, results) => {
        (err) ? res.send(err) : res.json(results);
    })
}


export const modifySailor = (req, res) => {
    const data = req.body.sailor;
    const id = req.params.id;
    updateSailor(data, id, (err, results) => {
        (err) ? res.send(err) : res.json(results);
    })
}



export const removeSailor = (req, res) => {
    const id = req.params.id;
    deleteSailor(id, (err, results) => {
        (err) ? res.send(err) : res.json(results);
    })
}