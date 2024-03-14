import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebsiteLayout from "./Layouts/WebsiteLayout";
import HomePage from "./pages/HomePage/HomePage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import Infor from "./pages/Infor/Infor";
import AdminLayout from "./Layouts/AdminLayout";
import ProductList from "./components/ProductList/ProductList";
import ProductAdd from "./components/ProductAdd/ProductAdd";
import ProductEdit from "./components/ProductEdit.tsx/ProductEdit";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products/:id" element={<DetailPage />} />{" "}
          <Route path="article" element={<ArticlePage />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<ProductList />} />
          <Route path="infor" element={<Infor />} />
          <Route path="products/add" element={<ProductAdd />} />
          <Route path="products/:id/edit" element={<ProductEdit />} />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
