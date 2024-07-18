import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID LqKgFVC083Dlle6rYCuPXzLCvSWQ1IQD7Yq6RnI_-1Q',
        },
        params: {
            query: 'cars'
        }
    });

    console.log(response);

    return response;
}

export default searchImages;