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
               <ul className="link">
                   <li className="links">
                       <Link to="/news+clermont+breaking-news11232" className="menulink">News</Link>
                   </li>
                   <li className="links">
                       <a
                           href="https://edition.cnn.com/business"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="business"
                       >Business</a>
                   </li>
                   <li className="links">
                       <a
                           href="https://www.foxnews.com/politics#&_intcmp=topnav_politics_2"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="politics"
                       >Politics</a>
                   </li>
                   <li className="links">
                       <a
                           href="https://www.foxnews.com/world"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="world"
                       >World</a>
                   </li>
                   <li className="links">
                       <a
                           href="https://www.foxnews.com/entertainment"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="entertainment"
                       >Entertainment</a>
                   </li>
                   <li className="links">
                       <a
                           href="https://edition.cnn.com/sport"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sports"
                       >Sports</a>
                   </li>
                   <li className="links">
                       <a
                           href="https://edition.cnn.com/travel"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="more"
                       > <p>More</p> <ChevronDown /></a>
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
