document.addEventListener("DOMContentLoaded", function () {
    const carDropdown = document.querySelector("select[name='car-drop-box']");
    const form = document.querySelector(".form-container");

    form.addEventListener("submit", function (event) {
        const selectedCar = carDropdown.value;

        if (!selectedCar) {
            event.preventDefault();
            alert("Please select a car before proceeding.");
            return;
        }

        const carDetailsMap = {
            "toyota-vios": { carChoice: "Toyota Vios", pricePerDay: 1500 },
            "toyota-fortuner": { carChoice: "Toyota Fortuner", pricePerDay: 2500 },
            "toyota-innova": { carChoice: "Toyota Innova", pricePerDay: 2000 },
            "mitsubishi-montero": { carChoice: "Mitsubishi Montero", pricePerDay: 2200 },
            "honda-civic": { carChoice: "Honda Civic", pricePerDay: 1800 },
            "nissan-terra": { carChoice: "Nissan Terra", pricePerDay: 2300 },
            "ford-ranger": { carChoice: "Ford Ranger", pricePerDay: 2400 },
            "hyundai-tucson": { carChoice: "Hyundai Tucson", pricePerDay: 2100 },
            "isuzu-mu-x": { carChoice: "Isuzu MU-X", pricePerDay: 2300 },
            "suzuki-ertiga": { carChoice: "Suzuki Ertiga", pricePerDay: 1700 }
        };

        const carDetails = carDetailsMap[selectedCar] || { carChoice: "Unknown", pricePerDay: 0 };

        console.log("Selected Car Details:", carDetails);


        localStorage.setItem("carDetails", JSON.stringify(carDetails));
    });
});
