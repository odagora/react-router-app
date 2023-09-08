import { HashRouter } from "react-router-dom";
import { Menu } from "./components/Menu";
import { AuthProvider } from "./context/auth";
import Router from "./routes/Router";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Menu />
        <Router />
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
