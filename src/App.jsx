import React from "react";
import HeaderPage from "./Header/HeaderPage";
import FooterPage from "./Footer/FooterPage";
import SpeechDeveloper from "./Component/SpeechDeveloper";
import ApplicationUI from "./Component/ApplicationUI";
import StoreStorage from "./Store/StoreStorage";

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
        </main>
        <footer>
          <FooterPage />
        </footer>
      </div>
    </StoreStorage>
  );
}

export default App;
