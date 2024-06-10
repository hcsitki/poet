/**
 * HUNTER SITKI
 * The Poet
 * 
 * Written for Bluestaq Code Challenge
 * 
 */


import { getData } from "./apiClient";

const fetchData = async (endpoint: string) => {
    try {
        const search_term = endpoint.split('/').filter(p => p !== '')[1];

        const response = await getData(endpoint);
        const data = await response.json();

        if(search_term) {
            console.log(data);
        } else {
            const entries = data[Object.keys(data)[0]];
            entries.forEach(e => {
                console.log(e);
            })
        }
        
    } catch (error) {
        console.error('Error fetching data', error);
    }
}


// TEST CASES:

// fetchData('/title')
// fetchData('/author')
fetchData('/author/Ernest Dowson')
// fetchData('/title/Ozymandias')