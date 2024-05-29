import './searchInput.css';
//import {FiHeart} from 'react-icons/fi';



export default function SearchInput({query, handleInputChange}){
    return(
        <div className='search-container'>

            <input 
                type='text' 
                placeholder='search brand or names'
                className='search-input'
                value={query}  
                onChange={handleInputChange}
            />

        </div>
        
    )
}