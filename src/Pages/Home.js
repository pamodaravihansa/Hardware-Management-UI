import '../CSS/style.css';

import SideNavBar from '../Components/sidenavbar.js'
import TopTitleBar from '../Components/toptitlebar.js';

export default function Home() {
    return (
        <div id="homepage">
            <SideNavBar />
            <div id="right-side">
                <TopTitleBar />
                <div id="homepage-content">

                </div>
            </div>
        </div>
    );
}