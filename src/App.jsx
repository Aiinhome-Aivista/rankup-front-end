import { BrowserRouter } from "react-router-dom";
import Index from "./common/routes/Index";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
