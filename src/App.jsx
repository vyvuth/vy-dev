import React, { useEffect } from "react";
import HeaderPage from "./Header/HeaderPage";
import FooterPage from "./Footer/FooterPage";
import SpeechDeveloper from "./Component/SpeechDeveloper";
import ApplicationUI from "./Component/ApplicationUI";
import StoreStorage from "./Store/StoreStorage";
import HightliagePage from "./Component/HightliagePage";
import BasicPage from "./Component/BasicPage";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StoreStorage>
      <div className="overflow-hidden">
        <header>
          <HeaderPage />
        </header>
        <main>
          <SpeechDeveloper />
          <ApplicationUI />
          <HightliagePage />
          <BasicPage />
          <outlet />
        </main>
        <footer>
          <FooterPage />
        </footer>
      </div>
    </StoreStorage>
  );
}

export default App;
