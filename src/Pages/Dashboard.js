import React, { useState } from 'react';

import '../CSS/style.scss';

import SideNavBar from '../Components/sidenavbar.js'
import TopTitleBar from '../Components/toptitlebar.js';
import ItemCard from '../Components/itemcard.js';
import AddItemModal from '../modals/AddItem.js';

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
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

                            <div className='add-item-btn' onClick={() => setIsOpen(true)}  >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M16.5 11.9149H11.9166V16.4982C11.9166 16.7413 11.8201 16.9745 11.6482 17.1464C11.4763 17.3183 11.2431 17.4149 11 17.4149C10.7569 17.4149 10.5237 17.3183 10.3518 17.1464C10.1799 16.9745 10.0833 16.7413 10.0833 16.4982V11.9149H5.49998C5.25686 11.9149 5.02371 11.8183 4.8518 11.6464C4.67989 11.4745 4.58331 11.2413 4.58331 10.9982C4.58331 10.7551 4.67989 10.5219 4.8518 10.35C5.02371 10.1781 5.25686 10.0815 5.49998 10.0815H10.0833V5.49821C10.0833 5.25509 10.1799 5.02194 10.3518 4.85003C10.5237 4.67812 10.7569 4.58154 11 4.58154C11.2431 4.58154 11.4763 4.67812 11.6482 4.85003C11.8201 5.02194 11.9166 5.25509 11.9166 5.49821V10.0815H16.5C16.7431 10.0815 16.9763 10.1781 17.1482 10.35C17.3201 10.5219 17.4166 10.7551 17.4166 10.9982C17.4166 11.2413 17.3201 11.4745 17.1482 11.6464C16.9763 11.8183 16.7431 11.9149 16.5 11.9149Z" fill="white" />
                                </svg>
                                Add Item
                            </div>
                            <AddItemModal open={isOpen} onclose={() => setIsOpen(false)}></AddItemModal>
                        </div>
                        <div className="restock-items-card-section">
                            <div className="item-card-grid3x3">
                                <ItemCard />
                                <ItemCard />
                                <ItemCard />
                                <ItemCard />
                                <ItemCard />
                                <ItemCard />
                                <ItemCard />
                                <ItemCard />
                                <ItemCard />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}