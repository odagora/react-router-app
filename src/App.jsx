import { HashRouter, Routes, Route } from "react-router-dom";
import { BlogPage } from "./components/BlogPage";
import { HomePage } from "./components/HomePage";
import { Menu } from "./components/Menu";
import { ProfilePage } from "./components/ProfilePage";

function App() {
  return (
    <HashRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
