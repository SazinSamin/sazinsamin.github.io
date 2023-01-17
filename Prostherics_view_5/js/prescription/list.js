const addPrescription = (data) => {
        
        const h1 = document.createElement('h1');
        const div = document.createElement('div');
        div.setAttribute('class', 'prescription_item');

        const datePTag  = document.createElement('p');
        const prescriptionPTag =  document.createElement('p');

        datePTag.innerHTML = 'Date: ' + data['Date'];
        prescriptionPTag.innerHTML = 'Prescription: ' + data['prescription'];

        const childDiv = h1.appendChild(div);
        childDiv.append(datePTag);
        childDiv.append(prescriptionPTag);

        document.getElementById('prescription_list').append(childDiv);

}

export default addPrescription;