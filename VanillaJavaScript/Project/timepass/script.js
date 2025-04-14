function updateDistribution(selectedSalary) {
    const distributionData = getDistribution(selectedSalary);
    renderTable(distributionData);
}

function getDistribution(money) {
    if (money <= 35000) {
        return [
            { category: "Investment", percentage: 20, amount: money * 0.20, yearlyAmount: (money * 0.20) * 12 },
            { category: "Bank", percentage: 12, amount: money * 0.12, yearlyAmount: (money * 0.12) * 12 },
            { category: "Sister Kota", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Parent Kota", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Needs", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Rent", percentage: 30, amount: money * 0.30, yearlyAmount: (money * 0.30) * 12 },
            { category: "Personal", percentage: 8, amount: money * 0.08, yearlyAmount: (money * 0.08) * 12 }
        ];
    } else if (money <= 50000) {
        return [
            { category: "Investment", percentage: 18, amount: money * 0.18, yearlyAmount: (money * 0.18) * 12 },
            { category: "Bank", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Sister Kota", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Parent Kota", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Ardhangani Kota", percentage: 7, amount: money * 0.07, yearlyAmount: (money * 0.07) * 12 },
            { category: "Children Kota", percentage: 5, amount: money * 0.05, yearlyAmount: (money * 0.05) * 12 },
            { category: "Needs", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Rent", percentage: 25, amount: money * 0.25, yearlyAmount: (money * 0.25) * 12 },
            { category: "Personal", percentage: 5, amount: money * 0.05, yearlyAmount: (money * 0.05) * 12 }
        ];
    } else if (money <= 60000) {
        return [
            { category: "Investment", percentage: 18, amount: money * 0.18, yearlyAmount: (money * 0.18) * 12 },
            { category: "Bank", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Sister Kota", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Parent Kota", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Ardhangani Kota", percentage: 7, amount: money * 0.07, yearlyAmount: (money * 0.07) * 12 },
            { category: "Children Kota", percentage: 5, amount: money * 0.05, yearlyAmount: (money * 0.05) * 12 },
            { category: "Needs", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Rent", percentage: 24, amount: money * 0.24, yearlyAmount: (money * 0.24) * 12 },
            { category: "Personal", percentage: 6, amount: money * 0.06, yearlyAmount: (money * 0.06) * 12 }
        ];
    } else if (money <= 70000) {
        return [
            { category: "Investment", percentage: 18, amount: money * 0.18, yearlyAmount: (money * 0.18) * 12 },
            { category: "Bank", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Sister Kota", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Parent Kota", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Ardhangani Kota", percentage: 7, amount: money * 0.07, yearlyAmount: (money * 0.07) * 12 },
            { category: "Children Kota", percentage: 5, amount: money * 0.05, yearlyAmount: (money * 0.05) * 12 },
            { category: "Needs", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Rent", percentage: 17, amount: money * 0.17, yearlyAmount: (money * 0.17) * 12 },
            { category: "Personal", percentage: 13, amount: money * 0.13, yearlyAmount: (money * 0.13) * 12 }
        ];
    } else if (money <= 80000) {
        return [
            { category: "Investment", percentage: 18, amount: money * 0.18, yearlyAmount: (money * 0.18) * 12 },
            { category: "Bank", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Sister Kota", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Parent Kota", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Ardhangani Kota", percentage: 7, amount: money * 0.07, yearlyAmount: (money * 0.07) * 12 },
            { category: "Children Kota", percentage: 5, amount: money * 0.05, yearlyAmount: (money * 0.05) * 12 },
            { category: "Needs", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Rent", percentage: 15, amount: money * 0.15, yearlyAmount: (money * 0.15) * 12 },
            { category: "Personal", percentage: 15, amount: money * 0.15, yearlyAmount: (money * 0.15) * 12 }
        ];
    } else if (money <= 90000) {
        return [
            { category: "Investment", percentage: 18, amount: money * 0.18, yearlyAmount: (money * 0.18) * 12 },
            { category: "Bank", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Sister Kota", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Parent Kota", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Ardhangani Kota", percentage: 7, amount: money * 0.07, yearlyAmount: (money * 0.07) * 12 },
            { category: "Children Kota", percentage: 5, amount: money * 0.05, yearlyAmount: (money * 0.05) * 12 },
            { category: "Needs", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Rent", percentage: 13.5, amount: money * 0.135, yearlyAmount: (money * 0.135) * 12 },
            { category: "Personal", percentage: 16.5, amount: money * 0.165, yearlyAmount: (money * 0.165) * 12 }
        ];
    } else if (money <= 100000) {
        return [
            { category: "Investment", percentage: 18, amount: money * 0.18, yearlyAmount: (money * 0.18) * 12 },
            { category: "Bank", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Sister Kota", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Parent Kota", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Ardhangani Kota", percentage: 7, amount: money * 0.07, yearlyAmount: (money * 0.07) * 12 },
            { category: "Children Kota", percentage: 5, amount: money * 0.05, yearlyAmount: (money * 0.05) * 12 },
            { category: "Needs", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Rent", percentage: 12, amount: money * 0.12, yearlyAmount: (money * 0.12) * 12 },
            { category: "Personal", percentage: 18, amount: money * 0.18, yearlyAmount: (money * 0.18) * 12 }
        ];
    } else if (money <= 200000) {
        return [
            { category: "Investment", percentage: 20, amount: money * 0.20, yearlyAmount: (money * 0.20) * 12 },
            { category: "Bank", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Sister Kota", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Parent Kota", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Ardhangani Kota", percentage: 7, amount: money * 0.07, yearlyAmount: (money * 0.07) * 12 },
            { category: "Children Kota", percentage: 5, amount: money * 0.05, yearlyAmount: (money * 0.05) * 12 },
            { category: "Needs", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Rent", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Personal", percentage: 18, amount: money * 0.18, yearlyAmount: (money * 0.18) * 12 }
        ];
    } else if (money <= 300000) {
        return [
            { category: "Investment", percentage: 20, amount: money * 0.20, yearlyAmount: (money * 0.20) * 12 },
            { category: "Bank", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Sister Kota", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Parent Kota", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Ardhangani Kota", percentage: 7, amount: money * 0.07, yearlyAmount: (money * 0.07) * 12 },
            { category: "Children Kota", percentage: 5, amount: money * 0.05, yearlyAmount: (money * 0.05) * 12 },
            { category: "Needs", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Rent", percentage: 10, amount: money * 0.10, yearlyAmount: (money * 0.10) * 12 },
            { category: "Personal", percentage: 18, amount: money * 0.18, yearlyAmount: (money * 0.18) * 12 }
        ];
    }

    return [];
}


function renderTable(data) {
    const container = document.getElementById("moneyTableContainer");
    container.innerHTML = ""; // Clear previous table
    const table = document.createElement("table");

    const headerRow = table.insertRow();
    ["Category", "Percentage", "Amount"].forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    data.forEach(row => {
        const dataRow = table.insertRow();
        dataRow.insertCell().textContent = row.category;
        dataRow.insertCell().textContent = `${row.percentage}%`;
        dataRow.insertCell().textContent = `$${row.amount.toFixed(2)}`;
        dataRow.insertCell().textContent = `$${row.yearlyAmount.toFixed(2)}`;
    });

    container.appendChild(table);
}

// Initialize with a default salary range
document.addEventListener("DOMContentLoaded", function () {
    updateDistribution(35000);
});


