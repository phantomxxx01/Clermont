import "./news-content.css"
import {NewsDetails} from "../../assets/data";
import OtherNews from "../otherNews/otherNews";

const NewsContent = () => {
    return (
        <div className="news-container">
            <div className="news-card">
                <div className="news-img">
                    <img src="/newsImg.jpg" alt="Jamal Wayama" />
                    <p>33-year-old Jamal Wayama taken into custody on September 9 over allegations of identity theft and financial fraud.</p>
                </div>

                <div className="news-content">
                    {NewsDetails.map(({id, heading, element}) => (
                        <div className="news-details" key={id}>
                            <h2 className="news-title" >
                                {heading}
                            </h2>
                            <p className="news-description">{element}</p>
                        </div>
                    ))}
                </div>
            </div>
            <OtherNews />
        </div>
    )
}
export default NewsContent
