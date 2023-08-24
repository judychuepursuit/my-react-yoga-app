// import logo from '../src/components/images/site icon.png';
// import './App.css';
// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import FourOFour from "./pages/FourOFour";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Show from "./pages/Show";
import New from "./pages/New";

function Pose() {
  return (
    <div className="Pose">
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/poses" element={<Index />} />
            <Route path="/poses/new" element={<New />} />
            <Route path="/poses/:id" element={<Show />} />
            <Route path="/poses/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
            <Route path="/poses/*" element={<FourOFour />} />
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}


export default Pose;
