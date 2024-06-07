import { useState } from 'react';
import { NavComponent } from '.';
import Logo1 from '../../assets/logo/Logo1.png';
import { LogoStyles } from './StyledSmallScreensNavbar';

const SmallScreensNavbar = () => {
    // declare 'translate' as a state variable
    let [translate, setTranslate] = useState(true);
    return (
        <div>
            <button className="hamburger-btn"
                onClick={() => setTranslate(!translate)}>
                {translate ? <span>&#9776;</span> : <span>&times;</span>}
            </button>
            <LogoStyles src={Logo1} alt='logo header' />
            <div id="sidebar-list" className={`${translate ? "addTransiton" : "removeTransition"}`}>
                <NavComponent
                    navClass="nav-small"
                    linkClassName="nav-small-link"
                    onClick={() => setTranslate(true)}  //set translate to true to hide the sidebar list
                />
            </div>
        </div>
    )
}
export default SmallScreensNavbar;
