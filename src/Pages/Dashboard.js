import '../CSS/style.scss';

import SideNavBar from '../Components/sidenavbar.js'
import TopTitleBar from '../Components/toptitlebar.js';
import ItemCard from '../Components/itemcard.js';

export default function Dashboard() {
    return (
        <div className="parent-page" >
            <SideNavBar />
            <div className="right-side">
                <TopTitleBar />
                <div className="page-content-dashboard">
                    <div className="low-stock-items-section">
                        <span className="section-title">Low Stock Items</span>
                        <div className="item-card-grid3x3">
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                        </div>
                    </div>
                    <div className="re-stock-items-section">
                        <span className="section-title">Restock Items</span>
                        <div className="inputs-section">
                            <div id="input-container">
                                <select name="Dropdown" id="dropdown">
                                    <option value="Outdoor_paints">Outdoor Paints</option>
                                    <option value="Floor_paints">Floor Paints</option>
                                    <option value="Wood_paints">Wood Paints</option>
                                    <option value="Metal_paints">Metal Paints</option>
                                </select>
                                <div id="search-box">
                                    <input type="search" id="search-input" placeholder="Search"></input>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M3 21L7.494 16.514M13.5 19C11.2457 19 9.08365 18.1045 7.48959 16.5104C5.89553 14.9163 5 12.7543 5 10.5C5 8.24566 5.89553 6.08365 7.48959 4.48959C9.08365 2.89553 11.2457 2 13.5 2C15.7543 2 17.9163 2.89553 19.5104 4.48959C21.1045 6.08365 22 8.24566 22 10.5C22 12.7543 21.1045 14.9163 19.5104 16.5104C17.9163 18.1045 15.7543 19 13.5 19V19Z" stroke="#698096" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </div>
                            </div>
                            <a href="">
                                <div className='add-item-btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M18.5 12.998H13.5V17.998C13.5 18.2633 13.3946 18.5176 13.2071 18.7052C13.0196 18.8927 12.7652 18.998 12.5 18.998C12.2348 18.998 11.9804 18.8927 11.7929 18.7052C11.6054 18.5176 11.5 18.2633 11.5 17.998V12.998H6.5C6.23478 12.998 5.98043 12.8927 5.79289 12.7052C5.60536 12.5176 5.5 12.2633 5.5 11.998C5.5 11.7328 5.60536 11.4785 5.79289 11.2909C5.98043 11.1034 6.23478 10.998 6.5 10.998H11.5V5.99805C11.5 5.73283 11.6054 5.47848 11.7929 5.29094C11.9804 5.1034 12.2348 4.99805 12.5 4.99805C12.7652 4.99805 13.0196 5.1034 13.2071 5.29094C13.3946 5.47848 13.5 5.73283 13.5 5.99805V10.998H18.5C18.7652 10.998 19.0196 11.1034 19.2071 11.2909C19.3946 11.4785 19.5 11.7328 19.5 11.998C19.5 12.2633 19.3946 12.5176 19.2071 12.7052C19.0196 12.8927 18.7652 12.998 18.5 12.998Z" fill="white" />
                                    </svg>
                                    Add Item
                                </div>

                            </a>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}