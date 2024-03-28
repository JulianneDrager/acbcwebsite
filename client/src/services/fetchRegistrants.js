const API_URL = 'http://localhost:8080';

const fetchRegistrants = async () => {
    try {
        const response = await fetch(`${API_URL}/registrants`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
};

export default fetchRegistrants;