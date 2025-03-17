import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HTMLPage from "./ComponentPage/HTMLPage.jsx";
import CSSPage from "./ComponentPage/CSSPage.jsx";
import JAVASCRIPTPage from "./ComponentPage/JAVASCRIPTPage.jsx";
import AboutContent from "./Header/AboutContent.jsx";
import ContactUs from "./Header/ContactUs.jsx";
import InternetPage from "./HTMLPageAll/InternetPage.jsx";
import WebsitePage from "./HTMLPageAll/WebsitePage.jsx";
import HostingPage from "./HTMLPageAll/HostingPage.jsx";
import DomainPage from "./HTMLPageAll/DomainPage.jsx";
import HTMLPages from "./HTMLPageAll/HTMLPages.jsx";
import ListPage from "./HTMLPageAll/ListPage.jsx";
import OrderlistPage from "./HTMLPageAll/OrderlistPage.jsx";
import UnlistPage from "./HTMLPageAll/UnlistPage.jsx";
import DefinPage from "./HTMLPageAll/DefinPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/content" element={<AboutContent />} />
        <Route path="/us" element={<ContactUs />} />
        <Route path="/HTML" element={<HTMLPage />} />
        <Route path="/CSS" element={<CSSPage />} />
        <Route path="/js" element={<JAVASCRIPTPage />} />
        <Route path="/introduction" element={<HTMLPage />} />
        <Route path="/internet" element={<InternetPage />} />
        <Route path="/website" element={<WebsitePage />} />
        <Route path="/hosting" element={<HostingPage />} />
        <Route path="/domain" element={<DomainPage />} />
        <Route path="/htmls" element={<HTMLPages />} />
        <Route path="/listHtml" element={<ListPage />} />
        <Route path="/order" element={<OrderlistPage />} />
        <Route path="/unlist" element={<UnlistPage />} />
        <Route path="/dlist" element={<DefinPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
