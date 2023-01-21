import preprocessing from "./preprocessing.js";

const fetchObj = {};

fetchObj.fetchDataLast10 = async () => {
        const res = await fetch("https://prosthetic-dasboard.onrender.com/last");
        //const res = await fetch("http://localhost:3000/last");

        let json = await res.json();
        let data = [];
        data = preprocessing.makeArrayofData(json);
        return data;
}


fetchObj.fetchDataAll = async () => {
        const res = await fetch("https://prosthetic-dasboard.onrender.com/lastfifty");
        //const res = await fetch("http://localhost:3000/lastfifty");
        let json = await res.json();
        let data = [];
        data = preprocessing.makeArrayofData(json);
        return data;
}

fetchObj.getIncidentCount = async () => {
        const res = await fetch("https://prosthetic-dasboard.onrender.com/incident");
        // const res = await fetch("http://localhost:3000/incident");
        let json = await res.json();
        return json.length;
}

export default fetchObj;