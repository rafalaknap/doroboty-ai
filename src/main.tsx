import { StrictMode } from "react";
import { PostHogErrorBoundary, PostHogProvider } from "@posthog/react";
import { createRoot } from "react-dom/client";
import { App } from "./features/prototype/app";
import { posthog } from "./lib/posthog";
import "./app/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <PostHogErrorBoundary>
        <App />
      </PostHogErrorBoundary>
    </PostHogProvider>
  </StrictMode>,
);
