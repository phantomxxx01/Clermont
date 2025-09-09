import './footer.css'
import {Business, Entertainment, More, News, Politics, Sports, World} from "../../assets/data";
import {FaFacebookSquare, FaInstagram} from "react-icons/fa";
import {FaLinkedinIn, FaXTwitter} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-card1">
                    <h2>News</h2>
                    {News.map(({id, content}) => (
                        <ul key={id}>
                            <li>{content}</li>
                        </ul>
                    ))}
                </div>
                <div className="footer-card1">
                    <h2>Business</h2>
                    {Business.map(({id, content}) => (
                        <ul key={id}>
                            <li>{content}</li>
                        </ul>
                    ))}
                </div>
                <div className="footer-card1">
                    <h2>Politics</h2>
                    {Politics.map(({id, content}) => (
                        <ul key={id}>
                            <li>{content}</li>
                        </ul>
                    ))}
                </div>
                <div className="footer-card1">
                    <h2>World</h2>
                    {World.map(({id, content}) => (
                        <ul key={id}>
                            <li>{content}</li>
                        </ul>
                    ))}
                </div>
                <div className="footer-card1">
                    <h2>Entertainment</h2>
                    {Entertainment.map(({id, content}) => (
                        <ul key={id}>
                            <li>{content}</li>
                        </ul>
                    ))}
                </div>
                <div className="footer-card1">
                    <h2>Sports</h2>
                    {Sports.map(({id, content}) => (
                        <ul key={id}>
                            <li>{content}</li>
                        </ul>
                    ))}
                </div>
                <div className="footer-card1">
                    <h2>More</h2>
                    {More.map(({id, content}) => (
                        <ul key={id}>
                            <li>{content}</li>
                        </ul>
                    ))}
                </div>
            </div>
            <hr className="footer-hr" />
            <div className="footer-close1">
                <div className="footer-logo">
                    <p className="logo-dets">Terms of Use</p>
                    <p className="logo-dets">Privacy Policy</p>
                    <p className="logo-dets">Manage Cookies</p>
                    <p className="logo-dets">About</p>
                    <p className="logo-dets">Newsletter</p>
                    <p className="logo-dets">Transcript</p>
                </div>
                <div className="footer-icons">
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
                </div>

            </div>
        </footer>
    )
}
export default Footer
