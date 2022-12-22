import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//pages
import LandingPage from './pages/LandingPage';
import AccountPage from './pages/AccountPage';
import LoginPage from './pages/LoginPage';
import ExplorePage from './pages/ExplorePage';
import PlanPage from './pages/PlanPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/account",
    element: <AccountPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/plan",
    element: <PlanPage />,
  },
  {
    path: "/explore",
    element: <ExplorePage />,
  },
]);

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
