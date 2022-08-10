const fetchData = async () => {
        const res = await fetch("https://virusbase.herokuapp.com/");
        let json = await res.json();

        for (let i = 0; i < json.length; i++) {

                const addHTMLdata = document.createElement('p');
                addHTMLdata.setAttribute('id','data');
                addHTMLdata.innerText = JSON.stringify(json[i]);
                console.log(addHTMLdata);
                document.getElementById('data').appendChild(addHTMLdata);
        
        }

}

fetchData();