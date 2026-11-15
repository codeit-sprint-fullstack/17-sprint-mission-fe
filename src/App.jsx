import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MarketApp from "./market/MarketApp.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <section id="market">
          <MarketApp />
        </section>
      </main>
      <Footer />
    </>
  );
}
