import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import KnowledgeBase from "./pages/KnowledgeBase.jsx";
import Courses from "./pages/Courses.jsx"; // Import the new Courses component
import QA from "./pages/QA.jsx";
import Upload from "./pages/Upload.jsx";
import Community from "./pages/Community.jsx";
import Search from "./pages/Search.jsx";
import Recommendations from "./pages/Recommendations.jsx";
import AccessControl from "./pages/AccessControl.jsx";
import CourseDetails from "./pages/CourseDetails.jsx"; // Import the new CourseDetails component
import Events from "./pages/Events.jsx"; // Import the new Events component
import Login from "./pages/Login.jsx"; // Import the new Login component
import CreateKnowledge from "./pages/CreateKnowledge.jsx"; // Import the new CreateKnowledge component
import ProtectedRoute from "./components/ProtectedRoute.jsx"; // Import the new ProtectedRoute component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/courses" element={<Courses />} /> {/* Add the new route */}
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/knowledge-base" element={<KnowledgeBase />} />
        <Route exact path="/qa" element={<QA />} />
        <Route exact path="/course-details" element={<CourseDetails />} /> {/* Add the new route for CourseDetails */}
        <Route exact path="/events" element={<Events />} /> {/* Add the new route for Events */}
        <Route exact path="/login" element={<Login />} /> {/* Add the new route for Login */}
        <Route exact path="/create-knowledge" element={<ProtectedRoute><CreateKnowledge /></ProtectedRoute>} /> {/* Add the new route for CreateKnowledge */}
      </Routes>
    </Router>
  );
}

export default App;