const fetchData = async () => {
        const res = await fetch("https://virusbase.herokuapp.com/");
        let json = await res.json();

        for (let i = 0; i < json.length; i++) {


                let insertData = {
                        id: json[i].id,
                        time: json[i].time,
                        payload: json[i].payload != undefined ? json[i].payload.toString().replace(/\\u0000/g, '').replace(/\\/g, '').replace(/\\/g, '')
                                : '',
                };



                console.log(insertData);

                const addHTMLdata = document.createElement('p');
                addHTMLdata.setAttribute('id','data');


                addHTMLdata.innerText = JSON.stringify(insertData);
                document.getElementById('data').appendChild(addHTMLdata);
        
        }
}

fetchData();