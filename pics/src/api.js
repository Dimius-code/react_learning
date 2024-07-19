import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID LqKgFVC083Dlle6rYCuPXzLCvSWQ1IQD7Yq6RnI_-1Q',
        },
        params: {
            query: term
        }
    });

    return response.data.results;
}

export default searchImages; 