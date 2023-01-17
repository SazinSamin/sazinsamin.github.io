const fetchData = async () => {
        const res = await fetch("https://prosthetic-dasboard.onrender.com/incident");
        //const res = await fetch("http://localhost:3000/incident");
        let json = await res.json();
        for(let i = 0; i < json.length; i++) {
                const incidentClass = document.getElementsByClassName('incident')[0];
                // console.log(incidentClass);
                const div = document.createElement('div');
                div.setAttribute('class', 'report');
                const reportTag =  document.createElement('p');

                const dateStr = JSON.stringify(json[i]['date']);
                const msgStr = JSON.stringify(json[i]['msg']);
                const report = `${dateStr}:     ${msgStr}`;

                reportTag.innerHTML = report;
                div.appendChild(reportTag);
                incidentClass.appendChild(div);
        }
}

// const createIncidentElement = (data) => {
//         let table = document.createElement('table');
//         let thead = document.createElement('thead');
//         let tbody = document.createElement('thead');
//         let th = document.createElement('th');
//         let td = document.createElement('td');

//         let head =  table.append(thead);
//         thDate = th.innerHTML= 'DateTime';
//         thBody = th.innerHTML = 'Incident';
//         console.log(table);
// }


fetchData();