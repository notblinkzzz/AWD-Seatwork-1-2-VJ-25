document.addEventListener("DOMContentLoaded", function () {
    const rentedCarsDropdown = document.getElementById("rentedCars");
    const returnForm = document.querySelector(".form-container");

    // Retrieve rented car details from localStorage
    const storedCar = JSON.parse(localStorage.getItem("carDetails"));

    if (storedCar) {
        // Populate dropdown with the rented car
        const option = document.createElement("option");
        option.value = storedCar.carChoice.toLowerCase().replace(/\s+/g, "-");
        option.textContent = `${storedCar.carChoice} - PHP ${storedCar.pricePerDay}/day`;
        rentedCarsDropdown.appendChild(option);
    } else {
        // No rented cars found
        rentedCarsDropdown.innerHTML = '<option disabled selected>No rented cars available</option>';
    }

    returnForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents navigation before alert

        if (storedCar) {
            alert(`${storedCar.carChoice} has been returned successfully!`);

            // Remove the car from storage
            localStorage.removeItem("carDetails");

            // Remove car from unavailable list
            let unavailableCars = JSON.parse(localStorage.getItem("unavailableCars")) || [];
            unavailableCars = unavailableCars.filter(car => car !== storedCar.carChoice.toLowerCase().replace(/\s+/g, "-"));
            localStorage.setItem("unavailableCars", JSON.stringify(unavailableCars));

            // Refresh page to reflect changes
            location.reload();
        }
    });
});
