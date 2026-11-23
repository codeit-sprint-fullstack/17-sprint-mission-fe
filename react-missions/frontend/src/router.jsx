import { createBrowserRouter, redirect } from "react-router";
import App from "./App.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";

const legacyRoutes = {
  "/index": "/",
  "/index.html": "/",
  "/items.html": "/items",
  "/login.html": "/login",
  "/signup.html": "/signup",
  "/faq.html": "/faq",
  "/privacy.html": "/privacy",
};

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "items", element: <ProductsPage /> },
      { path: "items/:productId", element: <ProductDetailPage /> },
      { path: "registration", element: <RegistrationPage /> },
      { path: "*", element: <ProductsPage /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/faq", element: <FaqPage /> },
  { path: "/privacy", element: <PrivacyPage /> },
  ...Object.entries(legacyRoutes).map(([path, destination]) => ({
    path,
    loader: ({ request }) => redirect(destination + new URL(request.url).search),
  })),
]);

export default router;
