import '../CSS/style.scss';

import SideNavBar from '../Components/sidenavbar.js'
import TopTitleBar from '../Components/toptitlebar.js';

export default function Sales() {
    return (


        <div className="parent-page" >
            <SideNavBar />
            <div className="right-side">
                <TopTitleBar />
                <div className='page-content-sales'>
                    <span className="section-title">Low Stock Items</span>
                    <div className='sales-top-section'>
                        <div className='table-inputs'>
                            <div id="search-box">
                                <input type="search" id="search-input" placeholder="Search"></input>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 21L7.494 16.514M13.5 19C11.2457 19 9.08365 18.1045 7.48959 16.5104C5.89553 14.9163 5 12.7543 5 10.5C5 8.24566 5.89553 6.08365 7.48959 4.48959C9.08365 2.89553 11.2457 2 13.5 2C15.7543 2 17.9163 2.89553 19.5104 4.48959C21.1045 6.08365 22 8.24566 22 10.5C22 12.7543 21.1045 14.9163 19.5104 16.5104C17.9163 18.1045 15.7543 19 13.5 19V19Z" stroke="#698096" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </div>
                            <div className='table-input'>
                                Filters
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21.1428 6.85725H8.5714M6.28569 6.85725H2.85712M21.1428 18.2858H8.5714M6.28569 18.2858H2.85712M15.4285 12.5715H2.85712M21.1428 12.5715H17.7143M7.42855 4.57153C7.73165 4.57153 8.02234 4.69194 8.23667 4.90627C8.45099 5.1206 8.5714 5.41129 8.5714 5.71439V8.0001C8.5714 8.30321 8.45099 8.5939 8.23667 8.80823C8.02234 9.02255 7.73165 9.14296 7.42855 9.14296C7.12544 9.14296 6.83475 9.02255 6.62042 8.80823C6.4061 8.5939 6.28569 8.30321 6.28569 8.0001V5.71439C6.28569 5.41129 6.4061 5.1206 6.62042 4.90627C6.83475 4.69194 7.12544 4.57153 7.42855 4.57153V4.57153ZM7.42855 16.0001C7.73165 16.0001 8.02234 16.1205 8.23667 16.3348C8.45099 16.5492 8.5714 16.8399 8.5714 17.143V19.4287C8.5714 19.7318 8.45099 20.0225 8.23667 20.2368C8.02234 20.4511 7.73165 20.5715 7.42855 20.5715C7.12544 20.5715 6.83475 20.4511 6.62042 20.2368C6.4061 20.0225 6.28569 19.7318 6.28569 19.4287V17.143C6.28569 16.8399 6.4061 16.5492 6.62042 16.3348C6.83475 16.1205 7.12544 16.0001 7.42855 16.0001ZM16.5714 10.2858C16.8745 10.2858 17.1652 10.4062 17.3795 10.6206C17.5939 10.8349 17.7143 11.1256 17.7143 11.4287V13.7144C17.7143 14.0175 17.5939 14.3082 17.3795 14.5225C17.1652 14.7368 16.8745 14.8572 16.5714 14.8572C16.2683 14.8572 15.9776 14.7368 15.7633 14.5225C15.549 14.3082 15.4285 14.0175 15.4285 13.7144V11.4287C15.4285 11.1256 15.549 10.8349 15.7633 10.6206C15.9776 10.4062 16.2683 10.2858 16.5714 10.2858V10.2858Z" stroke="#698096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='table-input'>
                                Select Date
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z" fill="#698096" />
                                </svg>
                            </div>

                        </div>
                        <div className='total-container'>
                            <span className='total-text'>
                                Total
                            </span>
                            <span className='total-value'>
                                156,000.000
                            </span>
                        </div>
                    </div>
                    <div className='sales-table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Transaction ID</th> <th>Date</th> <th>Item</th> <th>Quantity</th> <th>Cashier</th> <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#12345</td> <td>12.22.2022</td> <td>Dulux B White</td> <td>12 L</td> <td>Cashier Name</td> <td>10,000.000</td>
                                </tr>
                                <tr>
                                    <td>#12345</td> <td>12.22.2022</td> <td>Dulux B White</td> <td>12 L</td> <td>Cashier Name</td> <td>10,000.000</td>
                                </tr>
                                <tr>
                                    <td>#12345</td> <td>12.22.2022</td> <td>Dulux B White</td> <td>12 L</td> <td>Cashier Name</td> <td>10,000.000</td>
                                </tr>
                                <tr>
                                    <td>#12345</td> <td>12.22.2022</td> <td>Dulux B White</td> <td>12 L</td> <td>Cashier Name</td> <td>10,000.000</td>
                                </tr>
                                <tr>
                                    <td>#12345</td> <td>12.22.2022</td> <td>Dulux B White</td> <td>12 L</td> <td>Cashier Name</td> <td>10,000.000</td>
                                </tr>
                                <tr>
                                    <td>#12345</td> <td>12.22.2022</td> <td>Dulux B White</td> <td>12 L</td> <td>Cashier Name</td> <td>10,000.000</td>
                                </tr>
                                <tr>
                                    <td>#12345</td> <td>12.22.2022</td> <td>Dulux B White</td> <td>12 L</td> <td>Cashier Name</td> <td>10,000.000</td>
                                </tr>
                                <tr>
                                    <td>#12345</td> <td>12.22.2022</td> <td>Dulux B White</td> <td>12 L</td> <td>Cashier Name</td> <td>10,000.000</td>
                                </tr>
                                <tr>
                                    <td>#12345</td> <td>12.22.2022</td> <td>Dulux B White</td> <td>12 L</td> <td>Cashier Name</td> <td>10,000.000</td>
                                </tr>
                                <tr>
                                    <td>#12345</td> <td>12.22.2022</td> <td>Dulux B White</td> <td>12 L</td> <td>Cashier Name</td> <td>10,000.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
}