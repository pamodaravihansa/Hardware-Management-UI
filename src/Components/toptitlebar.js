import '../CSS/style.css';
import profileImage from '../assets/images/profile_image.png';

export default function TopTitleBar() {
    return (
        <div id="top-title-bar">
            <h2>Hardware Store Management System</h2>
            <div id="profile-section">
                <div id="profile-names">
                    <span id="yourname">Your Name</span>
                    <span id="admin">Admin</span>
                </div>
                <img src= {profileImage} alt='profile'></img>
            </div>
        </div>
        
    )
}