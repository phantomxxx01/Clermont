import {Route, Routes} from "react-router-dom";
import './App.css'
import NewsPage from "./components/NewsPage/newsPage";

const App = () => {
    return (
<Routes>
    <Route path="/news?clermont+breaking-news11232" element={<NewsPage />} />
</Routes>
    )
}
export default App
