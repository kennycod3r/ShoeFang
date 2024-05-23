import SearchInput from '../SearchInput/SearchInput'
import Buttons from '../components/Buttons'
import './Recommended.css'

export default function Recommended({handleClick,query, handleInputChange}){
   
    return(
        <>
            <div className='recomended-section'>
                <h2 className='recommended-title'>Recommended</h2>
                <div className='recomended-query'>
                    <div className='recommended-flex'>
                        <Buttons value="" title="All Products" onClickHandler={handleClick}/>
                        <Buttons value='Nike' title='Nike' onClickHandler={handleClick}/>
                        <Buttons value='Adidas' title='Adidas' onClickHandler={handleClick}/>
                        <Buttons value='Puma' title='Puma' onClickHandler={handleClick}/>
                        <Buttons value='Vans' title='Vans' onClickHandler={handleClick}/>
                    </div>


                    <div className='search-div'><SearchInput query={query} handleInputChange={handleInputChange}/> <div className='light-grey'><small>All product images</small> <a href='asos.com'>Asos</a></div></div>
                </div>
            </div>
        </>
    )
}