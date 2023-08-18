import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import urls from './urls';

const router = createBrowserRouter([
  {
    path: urls.login,
    element: <Login />,
  },
  { path: urls.home, element: <h1>butts</h1> },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
