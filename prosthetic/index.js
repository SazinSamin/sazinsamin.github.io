async function fetchData() {
        const res = await fetch("https://prosthetic.herokuapp.com/");
        let json = await res.json();
        console.log(json);
}

fetchData();


document.getElementById('Charge').innerHTML = "Charge: 60%";
document.getElementById('Temperature').innerHTML = "Temperature: 97.2F";
document.getElementById('Pulse').innerHTML = "Pulse: 75";
document.getElementById('Oxygen').innerHTML = "Oxygen: 95%";
