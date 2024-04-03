import '../CSS/style.scss';
import SideNavBar from '../Components/sidenavbar.js'
import TopTitleBar from '../Components/toptitlebar.js';

export default function Employees() {
    return (
        <>
            <SideNavBar></SideNavBar>
            <h2>Employees</h2>
            <TopTitleBar></TopTitleBar>
        </>
    );
}