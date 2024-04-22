import React from "react"
import { configureStore } from "@reduxjs/toolkit"
import ReactDOM from "react-dom/client"
import { Toaster } from "react-hot-toast"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import App from "./App"
import Chatbot from "./components/core/Chatbot"
import rootReducer from "./reducer"

const store = configureStore({
  reducer: rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster />
        <Chatbot />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
