// =========================
// Ounce -> Pound
// =========================

function convertToPound() {

    const ouncePrice =
        parseFloat(
            document.getElementById("ozPrice").value
        );

    if (isNaN(ouncePrice)) {
        return;
    }

    const poundPrice = ouncePrice * 16;

    document.getElementById("lbResult").textContent =
        "$" + poundPrice.toFixed(2) + " per pound";
}

// =========================
// Pound -> Ounce
// =========================

function convertToOunce() {

    const poundPrice =
        parseFloat(
            document.getElementById("lbPrice").value
        );

    if (isNaN(poundPrice)) {
        return;
    }

    const ouncePrice = poundPrice / 16;

    document.getElementById("ozResult").textContent =
        "$" + ouncePrice.toFixed(2) + " per ounce";
}

// =========================
// Package Calculator
// =========================

function calculateUnitPrice() {

    const price =
        parseFloat(
            document.getElementById("packagePrice").value
        );

    const weight =
        parseFloat(
            document.getElementById("packageWeight").value
        );

    if (
        isNaN(price) ||
        isNaN(weight) ||
        weight <= 0
    ) {
        return;
    }

    const costPerPound = price / weight;

    document.getElementById("unitResult").textContent =
        "$" +
        costPerPound.toFixed(2) +
        " per pound";
}

// =========================
// Product Comparison
// =========================

function compareProducts() {

    const priceA =
        parseFloat(
            document.getElementById("priceA").value
        );

    const weightA =
        parseFloat(
            document.getElementById("weightA").value
        );

    const priceB =
        parseFloat(
            document.getElementById("priceB").value
        );

    const weightB =
        parseFloat(
            document.getElementById("weightB").value
        );

    if (
        isNaN(priceA) ||
        isNaN(weightA) ||
        isNaN(priceB) ||
        isNaN(weightB) ||
        weightA <= 0 ||
        weightB <= 0
    ) {
        return;
    }

    const unitA = priceA / weightA;
    const unitB = priceB / weightB;

    let winner = "";

    if (unitA < unitB) {
        winner = "Package A";
    } else if (unitB < unitA) {
        winner = "Package B";
    } else {
        winner = "Tie";
    }

    document.getElementById("compareResult").innerHTML =
        `
        Package A: $${unitA.toFixed(2)}/lb<br>
        Package B: $${unitB.toFixed(2)}/lb<br><br>
        Best Value: <strong>${winner}</strong>
        `;
}

// =========================
// Clear Everything
// =========================

function clearAll() {

    const ids = [
        "ozPrice",
        "lbPrice",
        "packagePrice",
        "packageWeight",
        "priceA",
        "weightA",
        "priceB",
        "weightB"
    ];

    ids.forEach(id => {
        const element =
            document.getElementById(id);

        if (element) {
            element.value = "";
        }
    });

    document.getElementById("lbResult").textContent = "";
    document.getElementById("ozResult").textContent = "";
    document.getElementById("unitResult").textContent = "";
    document.getElementById("compareResult").textContent = "";
}

// =========================
// PWA Registration
// =========================

if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register(
        "./service-worker.js"
    );

}