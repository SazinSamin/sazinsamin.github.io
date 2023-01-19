const userCardHtml = `<h1 id="title">Patient Detials</h1>
<div class="patient_info">
        <div class="left">
                <h1 class="patient_info_left">Personal Information</h1>
                <img class="patient_info_left" src="/img/sazin_img.jpeg" alt="">
                <h2 class="patient_info_left">Name: Sazin Reshed Samin</h2>
                <h3 class="patient_info_left">Patient ID: 021191011</h3>
                <h3 class="patient_info_left">Mobile No: 01934756384</h3>
                <h3 class="patient_info_left">Date of Birth: 01-01-1998</h3>
                <Address class="patient_info_left">Arpara, Kaliganj, Jhenaidah</Address>
        </div>
        <div class="right">
                <h1 class="patient_info_right">Medical Information</h1>
                <h2 class="patient_info_right">Age: 24</h2>
                <h2 class="patient_info_right">Sex: Male</h2>
                <h2 class="patient_info_right">Blood group: B+</h2>
                <h2 class="patient_info_right">Wight: 70</h2>
                <h2 class="patient_info_right">Height: 5 feet 10 inch</h2>
                <h2 class="patient_info_right">Assigned Doctor: Meghboron Paul(873436)</h2>
        </div>
</div>`;

console.log("run");
const userCard = document.createElement("p");
userCard.innerHTML = userCardHtml;

const getHtmlCard = document.getElementsByClassName('card');
getHtmlCard[0].appendChild(userCard);