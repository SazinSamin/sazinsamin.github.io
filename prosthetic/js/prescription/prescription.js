import addPrescription from "./list.js";

const sendPrescription = () => {
        const submitBtn = document.getElementById("submit_button");
        submitBtn.addEventListener("click", (event) => {
                event.preventDefault();
                const prescription = document.getElementById("prescription").value;
                const email = document.getElementById("email").value;
                const jsonData = {
                        'Date': new Date().toString(),
                        'prescription': prescription,
                        'email': email,
                }
                const jsonDataStr = JSON.stringify(jsonData);
                addPrescription(jsonData);
                sendPostRequest(jsonDataStr);
        });
}



const sendPostRequest = async(data) => {
        // console.log(data);
        const url = "https://prosthetic-dasboard.onrender.com/prescription";
        addMessageStatus("Processing email Request...");
        fetch(url, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: data,
        }).then(res => {
                const msg = `Message send to: ${JSON.parse(data)['email'] ? JSON.parse(data)['email'] 
                : "sazinsamin50@gmail.com"}`;
                console.log(msg);
                addMessageStatus(msg);
        });
        
}

const addMessageStatus = (status) => {
        const msg_stat = document.getElementById("message_status");
        msg_stat.innerHTML = status;
}


sendPrescription();
