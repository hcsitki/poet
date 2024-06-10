export const getData = async (endpoint: string): Promise<Response> => {

    // Specifiying the full API endpoint
    const baseUrl = 'https://poetrydb.org';
    const url = `${baseUrl}${endpoint}`;

    // Try using fetch to pull from the API
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Return error for any response other than 200 
        if (response.status !== 200) {
            throw new Error(`Error, response status: ${response.status}`);
        }
        return response;
        
    } catch (error) {
        console.error('Error making GET request:', error);
        throw error;
    }
    
};