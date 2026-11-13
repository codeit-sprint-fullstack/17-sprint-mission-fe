import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Market2 from "./Market2.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Market2 />
      </main>
      <Footer />
    </>
  );
}
