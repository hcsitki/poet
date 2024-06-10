import { getData } from "./apiClient";

const fetchAuthors = async () => {
    try {
        const response = await getData('/author');
        const data = await response.json();
        const authors = data["authors"]
        authors.forEach(a => {
            console.log(a);
        })
    } catch (error) {
        console.error('Error fetching authors: ', error);
    }
}

fetchAuthors();