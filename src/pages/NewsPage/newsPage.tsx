import './newsPage.css'
import NewsComponent from "../../components/news-component/news-component";
import NewsContent from "../../components/news-content/news-content";


const NewsPage = () => {
    return (
        <main className="news-page">
            <div className="news-container">
                <NewsComponent />
                <NewsContent />
            </div>
        </main>
    )
}
export default NewsPage
