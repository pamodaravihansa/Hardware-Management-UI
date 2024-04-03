
import '../CSS/style.scss';
import { Link } from 'react-router-dom';

export default function SideNavBar() {
    return (
        <div className="navbar-container">
            <Link to='/' className='sidenav-home'>
                <div id="activeSideNav">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M24.5555 7.82175L15.8889 0.991925C15.0944 0.353148 14.0659 0 13 0C11.9341 0 10.9056 0.353148 10.1112 0.991925L1.44457 7.82175C0.985773 8.19061 0.619655 8.64309 0.370594 9.14908C0.121533 9.65507 -0.00475588 10.2029 0.000136924 10.7562V22.1047C0.000136924 23.1378 0.45668 24.1286 1.26933 24.8591C2.08198 25.5896 3.18418 26 4.33344 26H21.6666C22.8159 26 23.9181 25.5896 24.7308 24.8591C25.5434 24.1286 26 23.1378 26 22.1047V10.7433C26.0028 10.1921 25.8755 9.64677 25.6265 9.14316C25.3775 8.63954 25.0125 8.18916 24.5555 7.82175ZM15.8889 23.4031H10.1112V16.9109C10.1112 16.5665 10.2634 16.2362 10.5342 15.9927C10.8051 15.7492 11.1725 15.6124 11.5556 15.6124H14.4445C14.8276 15.6124 15.195 15.7492 15.4658 15.9927C15.7367 16.2362 15.8889 16.5665 15.8889 16.9109V23.4031ZM23.1111 22.1047C23.1111 22.449 22.9589 22.7793 22.688 23.0228C22.4171 23.2663 22.0497 23.4031 21.6666 23.4031H18.7778V16.9109C18.7778 15.8778 18.3212 14.887 17.5086 14.1565C16.6959 13.4259 15.5937 13.0155 14.4445 13.0155H11.5556C10.4063 13.0155 9.30415 13.4259 8.4915 14.1565C7.67885 14.887 7.22231 15.8778 7.22231 16.9109V23.4031H4.33344C3.95035 23.4031 3.58295 23.2663 3.31207 23.0228C3.04119 22.7793 2.88901 22.449 2.88901 22.1047V10.7433C2.88927 10.5589 2.9332 10.3767 3.01787 10.2088C3.10255 10.0409 3.22604 9.8911 3.38011 9.76942L12.0467 2.95258C12.3103 2.74441 12.6492 2.62961 13 2.62961C13.3509 2.62961 13.6898 2.74441 13.9534 2.95258L22.62 9.76942C22.7741 9.8911 22.8975 10.0409 22.9822 10.2088C23.0669 10.3767 23.1108 10.5589 23.1111 10.7433V22.1047Z" fill="#0080FF" />
                    </svg>
                    Home
                </div>
            </Link>

            <Link to='/dashboard' className='sidenav-dashboard'>
                <div className="inactiveSideNav">

                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M19.5 17.0625H21.125V21.125H19.5V17.0625ZM16.25 13H17.875V21.125H16.25V13ZM8.9375 21.125C7.86045 21.1237 6.82789 20.6953 6.0663 19.9337C5.30472 19.1721 4.87629 18.1395 4.875 17.0625H6.5C6.5 17.5446 6.64296 18.0159 6.91079 18.4167C7.17863 18.8175 7.55931 19.13 8.00471 19.3145C8.4501 19.4989 8.9402 19.5472 9.41303 19.4532C9.88586 19.3591 10.3202 19.127 10.6611 18.7861C11.002 18.4452 11.2341 18.0109 11.3282 17.538C11.4222 17.0652 11.3739 16.5751 11.1895 16.1297C11.005 15.6843 10.6925 15.3036 10.2917 15.0358C9.89086 14.768 9.41959 14.625 8.9375 14.625V13C10.0149 13 11.0483 13.428 11.8101 14.1899C12.572 14.9517 13 15.9851 13 17.0625C13 18.1399 12.572 19.1733 11.8101 19.9351C11.0483 20.697 10.0149 21.125 8.9375 21.125Z" fill="#BFCCD9" />
                        <path d="M22.75 1.625H3.25C2.81916 1.62543 2.40608 1.79677 2.10143 2.10143C1.79677 2.40608 1.62543 2.81916 1.625 3.25V22.75C1.62543 23.1808 1.79677 23.5939 2.10143 23.8986C2.40608 24.2032 2.81916 24.3746 3.25 24.375H22.75C23.1808 24.3744 23.5937 24.2029 23.8983 23.8983C24.2029 23.5937 24.3744 23.1808 24.375 22.75V3.25C24.3746 2.81916 24.2032 2.40608 23.8986 2.10143C23.5939 1.79677 23.1808 1.62543 22.75 1.625ZM22.75 8.9375H11.375V3.25H22.75V8.9375ZM9.75 3.25V8.9375H3.25V3.25H9.75ZM3.25 22.75V10.5625H22.75L22.7516 22.75H3.25Z" fill="#BFCCD9" />
                    </svg>
                    Dashboard
                </div>
            </Link>

            <Link to='/sales' className='sidenav-sales'>
                <div className="inactiveSideNav">

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 27" fill="none">
                        <path d="M20.6667 3.10693H3.33333C2.59695 3.10693 2 3.65472 2 4.33044V23.9066C2 24.5823 2.59695 25.1301 3.33333 25.1301H20.6667C21.403 25.1301 22 24.5823 22 23.9066V4.33044C22 3.65472 21.403 3.10693 20.6667 3.10693Z" stroke="#BFCCD9" stroke-width="2" stroke-linejoin="round" />
                        <path d="M8.00008 1V4.67053M16.0001 1V4.67053M6.66675 10.1763H17.3334M6.66675 15.0704H14.6667M6.66675 19.9644H12.0001" stroke="#BFCCD9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Sales
                </div >
            </Link>

            <Link to='/employees' className='sidenav-sales'>
                <div className="inactiveSideNav">

                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M18.1122 21.398L17.4188 15.847C17.3206 15.0607 16.9385 14.3375 16.3444 13.8132C15.7502 13.2889 14.9851 12.9997 14.1927 13H11.805C11.013 13.0002 10.2483 13.2896 9.65468 13.8139C9.06102 14.3381 8.67922 15.0611 8.58101 15.847L7.8866 21.398C7.84848 21.703 7.87569 22.0126 7.96641 22.3062C8.05713 22.5999 8.20929 22.8708 8.41278 23.1012C8.61626 23.3315 8.86643 23.5159 9.14665 23.6422C9.42688 23.7684 9.73075 23.8336 10.0381 23.8333H15.9618C16.269 23.8334 16.5728 23.7681 16.8529 23.6418C17.133 23.5155 17.383 23.3311 17.5864 23.1008C17.7897 22.8705 17.9418 22.5995 18.0324 22.306C18.1231 22.0124 18.1503 21.7029 18.1122 21.398V21.398Z" stroke="#BFCCD9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13 8.66675C14.7949 8.66675 16.25 7.21167 16.25 5.41675C16.25 3.62182 14.7949 2.16675 13 2.16675C11.2051 2.16675 9.75 3.62182 9.75 5.41675C9.75 7.21167 11.2051 8.66675 13 8.66675Z" stroke="#BFCCD9" stroke-width="2" />
                        <path d="M4.33341 11.9168C5.53003 11.9168 6.50008 10.9468 6.50008 9.75016C6.50008 8.55355 5.53003 7.5835 4.33341 7.5835C3.1368 7.5835 2.16675 8.55355 2.16675 9.75016C2.16675 10.9468 3.1368 11.9168 4.33341 11.9168Z" stroke="#BFCCD9" stroke-width="2" />
                        <path d="M21.6667 11.9168C22.8633 11.9168 23.8333 10.9468 23.8333 9.75016C23.8333 8.55355 22.8633 7.5835 21.6667 7.5835C20.47 7.5835 19.5 8.55355 19.5 9.75016C19.5 10.9468 20.47 11.9168 21.6667 11.9168Z" stroke="#BFCCD9" stroke-width="2" />
                        <path d="M4.3333 15.1667H4.0018C3.48891 15.1667 2.99263 15.3486 2.60125 15.68C2.20986 16.0115 1.94876 16.4711 1.86439 16.977L1.50364 19.1437C1.45187 19.4541 1.46834 19.7721 1.55192 20.0755C1.6355 20.3789 1.78417 20.6604 1.98759 20.9006C2.19102 21.1407 2.44431 21.3336 2.72986 21.466C3.0154 21.5983 3.32634 21.6668 3.64105 21.6667H7.5833M21.6666 15.1667H21.9981C22.511 15.1667 23.0073 15.3486 23.3987 15.68C23.7901 16.0115 24.0512 16.4711 24.1356 16.977L24.4963 19.1437C24.5481 19.4541 24.5316 19.7721 24.448 20.0755C24.3644 20.3789 24.2158 20.6604 24.0123 20.9006C23.8089 21.1407 23.5556 21.3336 23.2701 21.466C22.9845 21.5983 22.6736 21.6668 22.3589 21.6667H18.4166" stroke="#BFCCD9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Employees
                </div>
            </Link>
        </div>
    )
}