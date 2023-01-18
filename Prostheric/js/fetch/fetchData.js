import preprocessing from "./preprocessing.js";

const fetchObj = {};

fetchObj.fetchDataLast10 = async () => {
        const res = await fetch("http://localhost:3000/last");
        let json = await res.json();
        let data = [];
        data = preprocessing.makeArrayofData(json);
        return data;
}


fetchObj.fetchDataAll = async () => {
        const res = await fetch("http://localhost:3000/lastfifty");
        let json = await res.json();
        let data = [];
        data = preprocessing.makeArrayofData(json);
        return data;
}

export default fetchObj;