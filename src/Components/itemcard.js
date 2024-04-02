
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
                <div className='close-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
                        <path d="M0 8.45508L2.75391 4.19531V4.17773L0.0234375 0H1.81055L3.77344 3.18164H3.83789L5.79492 0H7.48828L4.66406 4.21875V4.23633L7.44141 8.45508H5.70117L3.70312 5.34375H3.65039L1.64648 8.45508H0Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    )
}