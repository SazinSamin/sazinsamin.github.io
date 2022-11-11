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
buttonOnClick("sidebar_item_7", "html/7days_stats.html", "#262D47");
buttonOnClick("sidebar_item_30", "html/30days_stats.html", "#262D47");