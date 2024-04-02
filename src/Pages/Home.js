import '../CSS/style.scss';

import SideNavBar from '../Components/sidenavbar.js'
import TopTitleBar from '../Components/toptitlebar.js';
import CategoryButtons from '../Components/categorybuttons.js';
import ItemCard from '../Components/itemcard.js';

export default function Home() {
    return (
        <div id="homepage">
            <SideNavBar />
            <div id="right-side">
                <TopTitleBar />
                <div id="homepage-content">
                    <div className="content-left">

                        <div className="choose-category-section">
                            <span id="choose-title">Choose Category</span>
                            <CategoryButtons />
                        </div>

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
                        <div id="items-container">
                            <ItemCard></ItemCard>
                            <ItemCard></ItemCard>
                        </div>
                    </div>
                    <div className="price-calc-container">
                    </div>
                </div>
            </div>
        </div>
    );
}