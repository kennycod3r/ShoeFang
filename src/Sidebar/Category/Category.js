import './Category.css';
import Input from '../../components/Input';

export default function Category({handleChange}){

    return(
        <div className='ml'>
             <h2 className='sidebar-title color-title'>Category</h2>
            <div>
                <label className='sidebar-label-container'>
                    <input onChange={handleChange} type='radio' value="" name='test'/>
                    <span className='checkmark'></span>All
                </label>

                <Input
                    handleChange ={handleChange}
                    value="sneakers"
                    title="sneakers"
                    name="test"
                />
                <Input
                    handleChange ={handleChange}
                    value="flats"
                    title="flats"
                    name="test"
                />
                <Input
                    handleChange ={handleChange}
                    value=""
                    title="clear"
                    name="test"
                />
            </div>
        </div>
    )
}