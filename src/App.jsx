import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./common/routes/Index";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <BrowserRouter future={{ v7_startTransition: true }}>
          <ScrollToTop />
          <Index />
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
