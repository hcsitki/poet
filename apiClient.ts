export const getData = async (endpoint: string): Promise<Response> => {
    const baseUrl = 'https://poetrydb.org';
    const url = `${baseUrl}${endpoint}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Error, response status: ${response.status}`);
        }
        return response;
    } catch (error) {
        console.error('Error making GET request:', error);
        throw error;
    }
    
};