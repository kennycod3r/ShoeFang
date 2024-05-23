
export default function BagItem({newItemPrice, newItemTitle}){
    console.log(newItemPrice, newItemTitle)
    return(
        <div className='bag-item'>
            
            <div className='close'>x</div>
            {newItemTitle}
            <span>price ${newItemPrice}</span>
            <span>Size</span>
            
            <div className='flexSpaceBetween item-count'>
                <div>-</div>
                <div>1</div>
                <div>+</div>
            </div> 
        </div>
    )
}