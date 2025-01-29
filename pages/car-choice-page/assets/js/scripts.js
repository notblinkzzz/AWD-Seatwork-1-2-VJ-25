document.addEventListener("DOMContentLoaded", function () {
    const carDropdown = document.getElementById("car-drop-box");
    const form = document.querySelector(".form-container");
    const carImage = document.getElementById("car-image");
    const carImageContainer = document.querySelector(".car-image-container");

    carImageContainer.style.display = "none";

    // Load unavailable cars from localStorage
    let unavailableCars = JSON.parse(localStorage.getItem("unavailableCars")) || [];

    // Disable unavailable cars in the dropdown
    Array.from(carDropdown.options).forEach(option => {
        if (unavailableCars.includes(option.value) && option.value !== "") {
            option.textContent = `Unavailable - ${option.textContent}`;
            option.disabled = true;
        }
    });

    carDropdown.addEventListener("change", function () {
        const selectedOption = carDropdown.options[carDropdown.selectedIndex];
        const imageSrc = selectedOption.getAttribute("data-image");

        if (imageSrc) {
            carImage.src = imageSrc;
            carImage.classList.remove("hidden");
            carImageContainer.style.display = "block";
        } else {
            carImage.classList.add("hidden");
            carImageContainer.style.display = "none";
        }
    });

    form.addEventListener("submit", function (event) {
        const selectedCar = carDropdown.value;

        if (!selectedCar) {
            event.preventDefault();
            alert("Please select a car before proceeding.");
            return;
        }

        // Add the selected car to unavailable cars
        unavailableCars.push(selectedCar);
        localStorage.setItem("unavailableCars", JSON.stringify(unavailableCars));

        // Store car details in localStorage
        const carDetailsMap = {
            "toyota-vios": { carChoice: "Toyota Vios", pricePerDay: 1500 },
            "toyota-fortuner": { carChoice: "Toyota Fortuner", pricePerDay: 2500 },
            "mitsubishi-montero": { carChoice: "Mitsubishi Montero", pricePerDay: 2200 },
            "nissan-terra": { carChoice: "Nissan Terra", pricePerDay: 2300 },
            "ford-ranger": { carChoice: "Ford Ranger", pricePerDay: 2400 },
            "hyundai-tucson": { carChoice: "Hyundai Tucson", pricePerDay: 2100 },
            "suzuki-ertiga": { carChoice: "Suzuki Ertiga", pricePerDay: 1700 }
        };

        const carDetails = carDetailsMap[selectedCar] || { carChoice: "Unknown", pricePerDay: 0 };
        localStorage.setItem("carDetails", JSON.stringify(carDetails));
    });
});
