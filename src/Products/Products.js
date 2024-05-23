import './Products.css';

//import {data} from '../db/data';


export default function Products({result}){
    return(
        <>
            <section className='card-container'>
                {result}
            </section>
        </>
    )
}