import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import NavBar from "./components/NavBar";
import Professional from "./routes/Professional";

function App() {
  return (
    <div className="h-screen w-screen flex text-teal-700">
      <NavBar />
<main className="bg-teal-700 h-full w-4/5 overflow-hidden">
  <div className="h-full">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/professional" element={<Professional />} />
    </Routes>
  </div>
</main>
    </div>
  );
}

export default App;
