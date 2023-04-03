import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from 'Routing';
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </React.StrictMode>
);
