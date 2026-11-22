import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './layouts/Layout.jsx';
import HomePage from './pages/home/HomePage.jsx';
import ItemListPage from './pages/items/ItemListPage.jsx';
import ItemDetailPage from './pages/items/ItemDetailPage.jsx';
import RegistrationPage from './pages/registration/RegistrationPage.jsx';
import NotFoundPage from './pages/not-found/NotFoundPage.jsx';

export default function App() {
  return <BrowserRouter><Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="items" element={<ItemListPage />} />
      <Route path="items/:id" element={<ItemDetailPage />} />
      <Route path="registration" element={<RegistrationPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes></BrowserRouter>;
}
