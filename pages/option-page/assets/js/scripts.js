document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("rental-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const selection = document.getElementById("car-drop-box").value;

        if (!selection) {
            alert("Please select an option before proceeding.");
            return;
        }

        if (selection === "rent") {
            window.location.href = "../car-choice-page/index.html";
        } else if (selection === "return") {
            window.location.href = "../return-car-page/index.html";
        }
    });
});
