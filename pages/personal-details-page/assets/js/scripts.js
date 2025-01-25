document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-container");
    const backButton = document.querySelector(".back-page");

    const loadSavedData = () => {
        const savedData = JSON.parse(localStorage.getItem("personalDetails"));
        if (savedData) {
            document.querySelector("input[name='first-name']").value = savedData.firstName || "";
            document.querySelector("input[name='last-name']").value = savedData.lastName || "";
            document.querySelector("input[name='email']").value = savedData.email || "";
            document.querySelector("input[name='address']").value = savedData.address || "";
            document.querySelector("input[name='contact-number']").value = savedData.contactNumber || "";
        }
    };

    form.addEventListener("submit", function (event) {
        const inputs = {
            firstName: document.querySelector("input[name='first-name']").value.trim(),
            lastName: document.querySelector("input[name='last-name']").value.trim(),
            email: document.querySelector("input[name='email']").value.trim(),
            address: document.querySelector("input[name='address']").value.trim(),
            contactNumber: document.querySelector("input[name='contact-number']").value.trim(),
        };

        if (Object.values(inputs).some(value => !value)) {
            event.preventDefault(); // Prevent form submission
            alert("Please fill in all required fields.");
        } else {
            localStorage.setItem("personalDetails", JSON.stringify(inputs));
            console.log("Saved Personal Details:", inputs);
        }
    });

    backButton.addEventListener("click", function () {
        window.location.href = "../car-choice-page/index.html";
    });

    loadSavedData();
});
