const buttonOnClick = (id, path, mouseLeaveColor) => {
        // const userDetails = document.getElementById("sidebar_patiend_info");
        const userDetails = document.getElementById(id);
        userDetails.addEventListener("mouseenter", () => {
                userDetails.style["background-color"] = "#0377fc";
        });
        userDetails.addEventListener("mouseleave", () => {
                userDetails.style["background-color"] = mouseLeaveColor;
        });
        userDetails.addEventListener("click", () => {
                location.href = path;
        });
}

buttonOnClick("sidebar_patiend_info", "html/patient_info.html", "#1B213B");
buttonOnClick("sidebar_item_prescription", "html/prescription.html", "#262D47");
buttonOnClick("sidebar_item_stat", "html/statistics.html", "#262D47");
buttonOnClick("sidebar_item_incident", "html/incident_report.html", "#262D47");
buttonOnClick("sidebar_item_telemedicine", "html/telemedicine.html", "#262D47");
buttonOnClick("sidebar_item_attachment", "html/attachment.html", "#262D47");
buttonOnClick("sidebar_item_about", "html/about.html", "#262D47");