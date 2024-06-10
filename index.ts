import { getData } from "./apiClient";

const fetchData = async (endpoint: string) => {
    try {
        const response = await getData(endpoint);
        const data = await response.json();
        const authors = data[Object.keys(data)[0]]
        authors.forEach(a => {
            console.log(a);
        })
        
    } catch (error) {
        console.error(`Error fetching ${endpoint.slice(1)}s: ${error}`);
    }
}

// fetchData('/title')
fetchData('/author')