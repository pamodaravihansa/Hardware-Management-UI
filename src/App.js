import './CSS/style.scss';

import SideNavBar from './Components/sidenavbar';
import Home from "./Pages/Home";
import Dashboard from './Pages/Dashboard';
import Sales from './Pages/Sales';
import { Route, Routes } from 'react-router-dom';

function App() {
  console.log(window.location);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/sales' element={<Sales/>}></Route>
      </Routes>
    </>
  );
}


export default App;
