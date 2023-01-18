const preprocessing = {};

preprocessing.arrays = {
        time: [],
        temp: [],
        pulse: [],
        oxygen: []
};


preprocessing.toNumeric = (arr) => {
        return arr.map(function(str) {
                return parseInt(str);
        });
}

preprocessing.makeArrayofData = (json) => {
        for(let i = 0; i < json.length; i++) {
                // console.log(json[i]);
                
                preprocessing.arrays.time.push(json[i]['date'].slice(7, 14))
                preprocessing.arrays.temp.push(json[i]['temperature']);
                preprocessing.arrays.pulse.push(json[i]['pulse']);
                preprocessing.arrays.oxygen.push(json[i]['oxygen']);
        }
        // console.log(preprocessing.arrays.temp);
        // console.log(preprocessing.arrays.pulse);
        // console.log(preprocessing.arrays.oxygen);

        preprocessing.arrays.temp = preprocessing.toNumeric(preprocessing.arrays.temp);    
        preprocessing.arrays.pulse = preprocessing.toNumeric(preprocessing.arrays.pulse);    
        preprocessing.arrays.oxygen = preprocessing.toNumeric(preprocessing.arrays.oxygen);    

        return preprocessing.arrays;


};


export default preprocessing;