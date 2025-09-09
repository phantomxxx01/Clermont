import {useState} from "react";
import "./mobileNav.css";
import {Menu, X} from "lucide-react";

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="MobileNav">
            <div className="navlogo">
                <img src="/clermountlogo.png" alt="logo" />
            </div>

            <div className="nav-right">
                <div className="login">Log In</div>
                <div className="watch">Watch Tv</div>
                <button
                    className="hamburger"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {
                        open ? <X /> : <Menu />
                    }
                </button>
            </div>

            {open && <ul>

            </ul>}
        </nav>
    )
}
export default MobileNav
