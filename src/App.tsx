

import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteLayout from './Layouts/WebsiteLayout';
import HomePage from './pages/HomePage/HomePage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
function App() {


  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/article" element={<ArticlePage />} />
         </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
