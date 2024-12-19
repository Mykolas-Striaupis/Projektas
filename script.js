document.addEventListener("DOMContentLoaded", function() {
    var startButton = document.getElementById("startButton");

    if (startButton) {
        startButton.addEventListener("click", function() {
            alert("Paruošiame Tave nuotykiams su snieglente! LETS GO");
        });
    }
});