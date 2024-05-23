import './BagItems.css';
import BagItem from '../components/BagItem';
import BagEmptySvg from '../img/shoppingCart.svg';


export default function BagItems({bagData, bagOpen}){
    
    let newDats = [...bagData];
    console.log(newDats)

 const bagDataResult = newDats.map((item) =>{
        return (
            <BagItem 
                newItemTitle ={item.itemTitle}
                newItemPrice ={item.itemPrice}
                key={Math.random()}
            />
        )
    })
    

        
        
    console.log(bagOpen) 

    return (
        <>
            {bagOpen && 
                <div className='Bag-item-section'>

               
                   {bagData.length-1 > 0 ? 
                        bagDataResult:
                        <div className='flexSpaceBetween bag-empty'>
                            <img src={BagEmptySvg} alt='bag empty svg'/>
                            <div>oops! looks like your Bag is Empty.</div>
                            <a href="./home" className='cont-shopping'>Continue Shoping?</a>
                        </div>

                    }

                    
               
                   {bagData.length-1 > 0 &&
                    <>
                        <div className='flexSpaceBetween total-div'>
                            <p>Subtotal</p>
                            <p>$140.00</p>
                        </div>
                        <button className='checkout-btn'>Checkout</button>
                    
                    </>
                   }
               </div>
            }
            
        
        </>
    )
}