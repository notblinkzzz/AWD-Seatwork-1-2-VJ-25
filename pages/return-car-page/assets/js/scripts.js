document.addEventListener("DOMContentLoaded", function () {
    const rentedCarsDropdown = document.getElementById("rentedCars");
    const returnForm = document.querySelector(".form-container");

    const storedCar = JSON.parse(localStorage.getItem("carDetails"));

    if (storedCar) {
        const option = document.createElement("option");
        option.value = storedCar.carChoice.toLowerCase().replace(/\s+/g, "-");
        option.textContent = `${storedCar.carChoice} - PHP ${storedCar.pricePerDay}/day`;
        rentedCarsDropdown.appendChild(option);
    } else {
        rentedCarsDropdown.innerHTML = '<option disabled selected>No rented cars available</option>';
    }

    returnForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        if (storedCar) {
            alert(`${storedCar.carChoice} has been returned successfully!`);

            localStorage.removeItem("carDetails");

            let unavailableCars = JSON.parse(localStorage.getItem("unavailableCars")) || [];
            unavailableCars = unavailableCars.filter(car => car !== storedCar.carChoice.toLowerCase().replace(/\s+/g, "-"));
            localStorage.setItem("unavailableCars", JSON.stringify(unavailableCars));

            location.reload();
        }
    });
});
