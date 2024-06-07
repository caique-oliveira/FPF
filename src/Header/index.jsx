import { Link } from 'react-scroll'; // react-scroll is a library for scrolling in React
import SmallScreensNavbar from './Navbar/SmallScreensNavbar';
import { useWindowWidthAndHeight } from './Navbar/CustomHooks';

const Header = () => {
    // use our custom hook to get the the window size
    const [width, height] = useWindowWidthAndHeight();
    console.log(height)
    return (
        <header>
            <div className="header-inner">
                <SmallScreensNavbar navClass="nav-small"
                    linkClassName="nav-small-link"
                />

                <Link to="Home"
                    smooth={true}
                    className="logo nav-link">
                    RH
                </Link>


            </div>
        </header>
    )
}

export default Header;