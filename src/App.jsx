import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import KnowledgeBase from "./pages/KnowledgeBase.jsx";
import QA from "./pages/QA.jsx";
import Upload from "./pages/Upload.jsx";
import Community from "./pages/Community.jsx";
import Search from "./pages/Search.jsx";
import Recommendations from "./pages/Recommendations.jsx";
import AccessControl from "./pages/AccessControl.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;