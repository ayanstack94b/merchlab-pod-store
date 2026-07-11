import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { router } from "./routes/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />

    <Toaster position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,

        style: {
          background: "#1A1A1A",
          color: "#fff",
          border: "1px solid rgba(255,255,255,.08)",
        },

        success: {
          style: {
            border: "1px solid #D4AF37",
          },
        },

        error: {
          style: {
            border: "1px solid #dc2626",
          },
        },
      }}
    />
  </StrictMode>
);