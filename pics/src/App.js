import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';
import {useState} from 'react';

function App() {

    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const requestImages =  await searchImages(term);
        
        setImages(requestImages);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    )
}

export default App;