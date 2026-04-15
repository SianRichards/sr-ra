import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="h-screen w-screen flex text-teal-700">
      <NavBar />
      <main className="bg-teal-700 h-full w-4/5">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
