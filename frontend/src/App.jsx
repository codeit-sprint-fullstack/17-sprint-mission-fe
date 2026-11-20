import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components/MarketplaceParts.jsx";
import { LandingPage } from "./pages/LandingPage.jsx";
import { MarketplacePage } from "./pages/MarketplacePage.jsx";
import { RegistrationPage } from "./pages/RegistrationPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header active="home" /><LandingPage /><Footer /></>} />
        <Route path="/items" element={<><Header active="items" /><MarketplacePage /><Footer /></>} />
        <Route path="/registration" element={<><Header /><RegistrationPage /><Footer /></>} />
        <Route path="/items/:id" element={null} />
        <Route path="*" element={<><Header /><main className="empty-route" /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
