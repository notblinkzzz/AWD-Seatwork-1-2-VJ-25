document.addEventListener("DOMContentLoaded", function () {
    const personalDetails = JSON.parse(localStorage.getItem("personalDetails"));
    const carDetails = JSON.parse(localStorage.getItem("carDetails"));

    console.log("Personal Details:", personalDetails);
    console.log("Car Details:", carDetails);

    if (personalDetails && carDetails) {
        document.getElementById("car-choice").textContent = carDetails.carChoice || "N/A";
        document.getElementById("price").textContent = carDetails.pricePerDay || "N/A";

        const fullName = `${personalDetails.firstName} ${personalDetails.lastName}`;
        document.getElementById("name").textContent = fullName.trim();
        document.getElementById("email").textContent = personalDetails.email || "N/A";
        document.getElementById("address").textContent = personalDetails.address || "N/A";
        document.getElementById("phone").textContent = personalDetails.contactNumber || "N/A";
    } else {
        if (!carDetails) {
            alert("Car details are missing. Please choose a car.");
            window.location.href = "../car-choice-page/index.html";
        } else {
            alert("Personal details are missing. Please fill in your information.");
            window.location.href = "../personal-details-page/index.html";
        }
    }

    const confirmationForm = document.getElementById("confirmationForm");
    confirmationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (document.getElementById("agreeCheckbox").checked) {
            alert("Thank you for confirming! Your details have been submitted.");
            localStorage.removeItem("personalDetails");
            window.location.href = "../car-choice-page/index.html";
        } else {
            alert("Please agree to the terms before proceeding.");
        }
    });
});
