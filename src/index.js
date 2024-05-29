import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Lazy load the Journal and CheckOut components
const Journal = lazy(() => import('./Pages/Journal'));
const CheckOut = lazy(() => import('./Pages/CheckOut'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Journal/:JournalId",
    element: (
      <Suspense fallback={<div className="loading-wrapper"><AiOutlineLoading3Quarters className="loading-circle"/></div>}>
        <Journal />
      </Suspense>
    ),
  },
  {
    path: "CheckOut/:bag",
    element: (
      <Suspense fallback={<div className="loading-wrapper"><AiOutlineLoading3Quarters className="loading-circle"/></div>}>
        <CheckOut />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
