const data = [
    { companyName: "Apple", modelName: "SE_2024", price: 40000 },
    { companyName: "Samsung", modelName: "M18", price: 20000 },
    { companyName: "Apple", modelName: "iPhone16", price: 65000 },
    { companyName: "Samsung", modelName: "S24", price: 65000 },
    { companyName: "Nothing", modelName: "Nothing3", price: 25000 },
    { companyName: "Motorola", modelName: "g14", price: 15000 },
    { companyName: "Apple", modelName: "iPhone16 pro", price: 89000 },
    { companyName: "Apple", modelName: "iPhone16 pro max", price: 120000 }
];

const companyFilter = document.getElementById('companyFilter');
const priceFilter = document.getElementById('priceFilter');
const searchBar = document.getElementById('searchBar');
const productList = document.getElementById('productList');

// Function to render products based on filter
function renderProducts(products) {
    productList.innerHTML = ''; // Clear previous products
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h3>${product.modelName}</h3>
            <p>Company: ${product.companyName}</p>
            <p>Price: ₹${product.price}</p>
        `;
        productList.appendChild(productElement);
    });
}

// Initial rendering of all products
renderProducts(data);

// Filter products based on selected company, price range, and search query
function filterProducts() {
    const selectedCompany = companyFilter.value;
    const selectedPrice = priceFilter.value;
    const searchQuery = searchBar.value.toLowerCase();

    const filteredProducts = data.filter(product => {
        // Filter by company
        let matchesCompany = selectedCompany === 'all' || product.companyName === selectedCompany;

        // Filter by price
        let matchesPrice = false;
        switch (selectedPrice) {
            case 'all':
                matchesPrice = true;
                break;
            case 'below20000':
                matchesPrice = product.price < 20000;
                break;
            case '20000to50000':
                matchesPrice = product.price >= 20000 && product.price <= 50000;
                break;
            case 'above50000':
                matchesPrice = product.price > 50000;
                break;
        }

        // Filter by search query (model name or company name)
        const matchesSearch = product.modelName.toLowerCase().includes(searchQuery) ||
                              product.companyName.toLowerCase().includes(searchQuery);

        return matchesCompany && matchesPrice && matchesSearch;
    });

    renderProducts(filteredProducts);
}

// Event listeners for filters and search bar
companyFilter.addEventListener('change', filterProducts);
priceFilter.addEventListener('change', filterProducts);
searchBar.addEventListener('input', filterProducts);
