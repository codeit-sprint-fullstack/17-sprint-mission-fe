import { Routes, Route } from 'react-router';
import { ROUTES } from './constants/routes';
import Header from './components/Header';
import Footer from './components/Footer';
import Item from './pages/Item';

function App() {
  return (
    <div id='wrap'>
      <Header />
      <main id='container'>
        <Routes>
          <Route path={ROUTES.HOME} element={<Item />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
