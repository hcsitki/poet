import { getData } from "./apiClient";

const fetchData = async (endpoint: string) => {
    try {
        const response = await getData(endpoint);
        const data = await response.json();
        const authors = data[Object.keys(data)[0]]
        authors.forEach(a => {
            console.log(a);
        })
        // console.log("Headers: ", response.headers);
        console.log(`Status ${response.status}: ${response.statusText}`);
        
    } catch {
        console.error('Error fetching data');
    }
}

// fetchData('/title')
fetchData('/author')