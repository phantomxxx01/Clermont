import './otherNews.css'
import {NewsList, NewsList2} from "../../assets/data";

const OtherNews = () => {
    return (
        <div className="otherNews-container">
            <div className="otherNews-left">
                <h2>Up Next</h2>
                <div className="otherNews-item-content">
                {NewsList.map(({id, img, content, type}) => (
                    <div className="otherNews-item" key={id}>
                            <img src={img} alt="news" />
                            <h2>{content}</h2>
                            <p className="by">{type}</p>
                    </div>
                ))}
                </div>
            </div>
            <div className="otherNews-right">
                <h2>Most Read</h2>
                {NewsList2.map(({id, content}) => (
                    <ul className="otherNews-item2" key={id}>
                        <li>{content}</li>
                    </ul>
                ))}
            </div>
        </div>
    )
}
export default OtherNews
