import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css"; // Global CSS styles
import App from "./App"; // Main App component
import { store } from "./redux/store"; // Redux store

// Create a root element for the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
