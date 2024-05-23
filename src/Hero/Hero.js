import './Hero.css'


export default function Hero(){
    return(
        <div className="hero">
            <div className='hero-Text'>
               <div className='flexCenter hero-sales-text '>
                    <h2 className='hero-headtext'>WINTER SALE</h2>
                    <button className='flexCenter hero-btn'>SHOP THE SALE</button>
               </div>
                <div className='hero-line'>
                   up to 55% off
                </div>
                
            </div>
        </div>
    )
}