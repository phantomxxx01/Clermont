import './otherNews.css'
import {NewsList, NewsList2} from "../../assets/data";

const OtherNews = () => {
    return (
        <div className="otherNews-container">
            <div className="otherNews-left">
                <h2>Up Next</h2>
                <div className="otherNews-item-content">
                {NewsList.map(({id, img, content, type, link}) => (
                    <div className="otherNews-item" key={id}>
                            <img src={img} alt="news" />
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >{content}</a>
                            <p className="by">{type}</p>
                    </div>
                ))}
                </div>
            </div>
            <div className="otherNews-right">
                <h2>Most Read</h2>
                {NewsList2.map(({id, no, content, link}) => (
                    <ul className="otherNews-item2" key={id}>
                        <li>
                            <p>{no}</p>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="items-content"
                            >{content}</a>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}
export default OtherNews
