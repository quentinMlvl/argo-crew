import axios from "axios";
import { apiBaseUrl as baseURL } from "../../app.config.json"


const getSailors = async () => {
    return axios.get(`${baseURL}/sailors`).then((res, err) => {
        if(err) console.log(err);
        else return res.data;
    })

}

const modifySailor = async (id, data) => {
    return axios.put(`${baseURL}/sailors/${id}`, {
        sailor: data
    }).then((res, err) => {
        if(err) console.log(err);
        else return res.data;
    })
}


const addSailor = async (data) => {
    return axios.post(`${baseURL}/sailors`, {
        sailor: data
    }).then((res, err) => {
        if(err) console.log(err);
        else return res.data;
    })
}

const deleteSailor = async(id) => {
    return axios.delete(`${baseURL}/sailors/${id}`)
                .then((res, err) => {
                    if(err) console.log(err);
                    else return res.data;
                })
}

export {
    getSailors,
    modifySailor,
    addSailor,
    deleteSailor,
}