import { createBrowserRouter, redirect } from "react-router";
import App from "./App.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";

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
      { path: "*", element: <ProductsPage /> },
    ],
  },
  { path: "/login", element: <AuthPage key="login" /> },
  { path: "/signup", element: <AuthPage key="signup" signup /> },
  { path: "/faq", element: <FaqPage /> },
  { path: "/privacy", element: <PrivacyPage /> },
  ...Object.entries(legacyRoutes).map(([path, destination]) => ({
    path,
    loader: ({ request }) => redirect(destination + new URL(request.url).search),
  })),
]);

export default router;
