import {Route, Routes} from "react-router-dom";
import './App.css'
import NewsPage from "./pages/NewsPage/newsPage";
import Nav from "./components/Nav/nav";
import Footer from "./components/footer/footer";

const App = () => {
    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<NewsPage />} />
                <Route path="/news+clermont+breaking-news11232" element={<NewsPage />} />
            </Routes>
            <Footer />
        </div>

    )
}
export default App
