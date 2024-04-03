import '../CSS/style.scss';

import SideNavBar from '../Components/sidenavbar.js'
import TopTitleBar from '../Components/toptitlebar.js';

export default function Dashboard() {
    return (
        <>
            <SideNavBar></SideNavBar>
            <h2>Dashboard</h2>
            <TopTitleBar></TopTitleBar>
        </>
    );
}