async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/data');
        const data = await response.json();
        console.table(data);

        // Do something with the data (e.g., update the DOM)
        const dataContainer = document.getElementById('data-container');
        dataContainer.innerHTML = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error(`Erorororror: ${error.message}`);
    }
}

fetchData();