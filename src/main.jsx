import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />

            <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                    duration: 4000,
                    style: {
                        borderRadius: "12px",
                        background: "#ffffff",
                        color: "#1f2937",
                        border: "1px solid #d1d5db",
                        padding: "16px",
                    },
                    success: {
                        iconTheme: {
                            primary: "#1a6859",
                            secondary: "#ffffff",
                        },
                    },
                    error: {
                        iconTheme: {
                            primary: "#dc2626",
                            secondary: "#ffffff",
                        },
                    },
                }}
            />

        </BrowserRouter>
    </React.StrictMode>
);