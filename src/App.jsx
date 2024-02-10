import { HashRouter } from "react-router-dom";
import { Menu } from "./components/Menu";
import { AuthProvider } from "./context/auth";
import Router from "./routes/Router";
import { DataProvider } from "./context/data";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <DataProvider>
          <Menu />
          <Router />
        </DataProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
