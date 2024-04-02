
import '../CSS/style.scss';

export default function ItemCard() {
    return (
        <div id="item-card">
            <div className='item-card-top-content'>
                <span id="item-name">Dulux Brilliant white 20L</span>
            </div>
            <div className='item-card-bottom-content'>
                <div id="item-card-price">
                    <span id="rs">Rs.&nbsp;</span>
                    <span id="price">60,500.00</span>
                </div>
                <div id='item-card-qty'>
                    <span id="qty">10&nbsp;</span>
                    <span id="qty-text">Available</span>
                </div>
            </div>
        </div>
    )
}