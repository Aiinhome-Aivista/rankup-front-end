import { BrowserRouter } from "react-router-dom";
import Index from "./common/routes/Index";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <BrowserRouter>
          <Index />
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
