import './news-component.css'

const NewsComponent = () => {
    return (
        <div className="news-component">
            <span  className="news-header1">
                <p className="news-business">BUSINESS</p>
                <p className="by">•</p>
                <p>4 MIN READ</p>
            </span>

            <span className="news-header2">
                <h1>
                  Breaking News: Clermont Man Arrested for Impersonating Bank CEO
                </h1>
            </span>

            <span className="news-header3">
                <p>Published September 9, 2025 8:00am EDT</p>
            </span>

            <span className="news-header4">
                <img src="/male.webp" alt="James" />
                <p className="by">By</p>
                <p>James Joseph</p>
                <p className="by">•</p>
                <p>Clermont 247 News</p>
            </span>
        </div>
    )
}
export default NewsComponent
