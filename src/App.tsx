import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import NavBar from "./components/NavBar";
import Timeline from "./routes/Timeline";
import Projects from "./routes/Projects";

function App() {
  return (
    <div className="h-screen w-screen flex text-teal-700">
      <NavBar />
      <main className="bg-teal-700 h-full w-4/5 overflow-hidden border-l-4 border-yellow-100">
        <div className="h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Timeline />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
