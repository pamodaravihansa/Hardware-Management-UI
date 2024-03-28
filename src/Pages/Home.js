import '../CSS/style.css';

import SideNavBar from '../Components/sidenavbar.js'
import TopTitleBar from '../Components/toptitlebar.js';
import CategoryButtons from '../Components/categorybuttons.js';

export default function Home() {
    return (
        <div id="homepage">
            <SideNavBar />
            <div id="right-side">
                <TopTitleBar />
                <div id="homepage-content">
                    <span id="choose-title">Choose Category</span>
                    <CategoryButtons/>
                </div>
            </div>
        </div>
    );
}