import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layouts/Layout.jsx";
import HomePage from './pages/HomePage';
import PandaMarket from "./pages/PandaMarket.jsx";
import Registration from "./pages/Registration.jsx";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/items" element={<PandaMarket/>}/>
          <Route path="/registration" element={<Registration/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
