import {useState} from "react";
import "./mobileNav.css";
import {ChevronDown, Menu, Search, X} from "lucide-react";
import {Link} from "react-router-dom";
import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedinIn, FaXTwitter} from "react-icons/fa6";

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="MobileNav">
            <div className="MobileNavHeader">
                <div className="navlogo">
                    <img src="/clermountlogo.png" alt="logo" />
                </div>

                <div className="nav-right">
                    <div className="login">Log In</div>

                    <button
                        className="hamburger"
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        {
                            open ? <X color="black" strokeWidth={2}/> : <Menu color="black" strokeWidth={2}  />
                        }
                    </button>
                </div>
            </div>


            {open && <ul className="mobile-link">
                <li className="search">
                    <form className="search-form">
                        <input
                        type="search"
                        placeholder="Search Clermont247"
                        />
                        <Search />
                    </form>
                </li>
                <li>
                    <Link to="/news+clermont+breaking-news11232" className="news">News</Link>
                </li>
                <li>
                    <Link to="/news+clermont+breaking-news11232" className="business">Business</Link>
                </li>
                <li>
                    <Link to="/news+clermont+breaking-news11232" className="politics">Politics</Link>
                </li>
                <li>
                    <Link to="/news+clermont+breaking-news11232" className="world">World</Link>
                </li>
                <li>
                    <Link to="/news+clermont+breaking-news11232" className="entertainment">Entertainment</Link>
                </li>
                <li>
                    <Link to="/news+clermont+breaking-news11232" className="sports">Sports</Link>
                </li>
                <li className="more-options">
                    <Link to="/news+clermont+breaking-news11232" className="more">
                        <p>More</p>
                        <ChevronDown />
                    </Link>
                </li>
                <li className="watchtv">
                    <div className="watch">Watch Tv</div>
                </li>
                <li className="logos">
                    <p>Follow Clermont247</p>
                    <div className="logo-icon">
                        <span>
                            <FaFacebookSquare />
                        </span>
                        <span>
                            <FaInstagram />
                        </span>
                        <span>
                            <FaXTwitter />
                        </span>
                        <span>
                            <FaLinkedinIn />
                        </span>
                    </div>
                </li>
            </ul>}
        </nav>
    )
}
export default MobileNav
