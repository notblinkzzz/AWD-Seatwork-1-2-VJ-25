document.addEventListener("DOMContentLoaded", function () {
    const personalDetails = JSON.parse(localStorage.getItem("personalDetails"));
    const paymentDetailsContainer = document.getElementById("payment-details");
    const nextButton = document.getElementById("nextButton");

    if (!personalDetails || !personalDetails.paymentMethod) {
        alert("Payment method not selected. Please go back and fill in your details.");
        window.location.href = "../personal-details-page/index.html";
        return;
    }

    const paymentMethod = personalDetails.paymentMethod;
    let paymentHTML = "";

    if (["credit-card", "debit-card"].includes(paymentMethod)) {
        paymentHTML = `
            <label for="card-number" class="payment-label">Card Number <span>*</span></label>
            <input type="text" id="card-number" name="card-number" placeholder="1234567890123456" 
                   class="payment-input" required pattern="[0-9]{16}" maxlength="16" 
                   title="Card number must be exactly 16 digits.">

            <label for="expiry-date" class="payment-label">Expiry Date <span>*</span></label>
            <input type="month" id="expiry-date" name="expiry-date" class="payment-input" required>

            <label for="cvv" class="payment-label">CVV <span>*</span></label>
            <input type="text" id="cvv" name="cvv" placeholder="123" 
                   class="payment-input" required pattern="[0-9]{3,4}" maxlength="4" 
                   title="CVV must be 3 or 4 digits.">
        `;
    } else if (paymentMethod === "gcash" || paymentMethod === "paypal") {
        paymentHTML = `
            <p class="payment-text">Scan the QR code below to complete your payment:</p>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Test" class="qr-code" width="45%">
        `;
    }

    paymentDetailsContainer.innerHTML = paymentHTML;

    nextButton.addEventListener("click", function () {
        if (["credit-card", "debit-card"].includes(paymentMethod)) {
            const cardNumber = document.getElementById("card-number");
            const expiryDate = document.getElementById("expiry-date");
            const cvv = document.getElementById("cvv");

            if (!cardNumber.value.trim() || !expiryDate.value.trim() || !cvv.value.trim()) {
                alert("Please fill in all required fields.");
                return;
            }

            if (!/^\d{16}$/.test(cardNumber.value)) {
                alert("Invalid Card Number! It must be exactly 16 digits.");
                cardNumber.style.border = "2px solid red";
                return;
            }

            if (!/^\d{3,4}$/.test(cvv.value)) {
                alert("Invalid CVV! It must be 3 or 4 digits.");
                cvv.style.border = "2px solid red";
                return;
            }
        }

        window.location.href = "../confirmation-page/index.html";
    });

});
