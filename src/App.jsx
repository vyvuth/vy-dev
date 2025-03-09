import React from "react";
import HeaderPage from "./Header/HeaderPage";
import FooterPage from "./Footer/FooterPage";
import SpeechDeveloper from "./Component/SpeechDeveloper";
import ApplicationUI from "./Component/ApplicationUI";
import StoreStorage from "./Store/StoreStorage";
import HightliagePage from "./Component/HightliagePage";
import BasicPage from "./Component/BasicPage";

function App() {
  return (
    <StoreStorage>
      <div>
        <header>
          <HeaderPage />
        </header>
        <main>
          <SpeechDeveloper />
          <ApplicationUI />
          <HightliagePage />
          <BasicPage />
        </main>
        <footer>
          <FooterPage />
        </footer>
      </div>
    </StoreStorage>
  );
}

export default App;
