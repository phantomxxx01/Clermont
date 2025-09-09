import { Link } from 'react-router-dom';
import "./desktopNav.css"
import {ChevronDown, Search} from "lucide-react";

const DesktopNav = () => {
    return (
        <nav className="Nav">
            <div className="nav-content">
                <div className="nav-logo">
                    <img src="/clermountlogo.png" alt="Logo" />
                </div>
               <ul>
                   <li className="links">
                       <Link to="/news?clermont+breaking-news11232" className="menulink">News</Link>
                       <Link to="/news?clermont+breaking-news11232" className="business">Business</Link>
                       <Link to="/news?clermont+breaking-news11232" className="politics">Politics</Link>
                       <Link to="/news?clermont+breaking-news11232" className="world">World</Link>
                       <Link to="/news?clermont+breaking-news11232" className="entertainment">Entertainment</Link>
                       <Link to="/news?clermont+breaking-news11232" className="sports">Sports</Link>
                       <Link to="/news?clermont+breaking-news11232" className="more"> <p>More</p> <ChevronDown /></Link>
                   </li>
               </ul>
                <div className="nav-log">
                    <div className="search">
                        <Search />
                    </div>
                    <div className="login">Log In</div>
                    <div className="watch">Watch Tv</div>
                </div>
            </div>
        </nav>
    )
}
export default DesktopNav
