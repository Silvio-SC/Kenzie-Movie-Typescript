import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { BrowserRouter } from "react-router-dom"
import { MoviesProvider } from "./providers";



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <BrowserRouter>
    <MoviesProvider>
      <App />
    </MoviesProvider>
     </BrowserRouter>
  </React.StrictMode>
);
