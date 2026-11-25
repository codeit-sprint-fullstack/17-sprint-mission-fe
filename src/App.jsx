import { Routes, Route } from 'react-router';
import { ROUTES } from './constants/routes';
import Layout from './layout/Layout';
import Contents from './layout/Contents';
import LandingPage from './pages/LandingPage';
import ItemsPage from './pages/ItemsPage';
import ItemsDetailPage from './pages/ItemsDetailPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <div id='wrap'>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<LandingPage />}></Route>
          <Route element={<Contents />}>
            <Route path={ROUTES.ITEMS} element={<ItemsPage />}></Route>
            <Route path={ROUTES.DETAIL} element={<ItemsDetailPage />}></Route>
            <Route path={ROUTES.REGIST} element={<RegistrationPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
