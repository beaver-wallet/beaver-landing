import "./index.css";
import { Landing } from "./Landing";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Roadmap } from "./Roadmap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/roadmap"
          element={<Roadmap />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
