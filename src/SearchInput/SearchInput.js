import './searchInput.css';
//import {FiHeart} from 'react-icons/fi';



export default function SearchInput({query, handleInputChange}){
    return(
        <div className='search-container'>

            <input 
                type='text' 
                placeholder='search items'
                className='search-input'
                value={query}  
                onChange={handleInputChange}
            />

        </div>
        
    )
}