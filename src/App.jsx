import { HashRouter } from "react-router-dom";
import { Menu } from "./components/Menu";
import Router from "./routes/Router";

function App() {
  return (
    <HashRouter>
      <Menu />
      <Router />
    </HashRouter>
  );
}

export default App;
