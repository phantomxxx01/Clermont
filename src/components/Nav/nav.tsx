import DesktopNav from '../desktopNav/desktopNav'
import MobileNav from '../mobileNav/mobileNav';
import useMediaQuery from '../../hooks/useMediaQuery'

const Nav = () => {
    const isMobile = useMediaQuery("(max-width: 990px)");
    return <div>{isMobile ? <MobileNav/> : <DesktopNav />}</div>;
};

export default Nav;