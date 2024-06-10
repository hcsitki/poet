import { getData } from "./apiClient";

const fetchData = async () => {
    try {
        const response = await getData('/author');
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
};

fetchData();