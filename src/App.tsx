import {Route, Routes} from "react-router-dom";
import './App.css'
import NewsPage from "./pages/NewsPage/newsPage";
import Nav from "./components/Nav/nav";

const App = () => {
    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/news+clermont+breaking-news11232" element={<NewsPage />} />
            </Routes>
        </div>

    )
}
export default App
