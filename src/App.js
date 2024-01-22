import Home from './pages/Home';
import Speaker from './pages/Speakers';
import Error from './pages/Error';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speaker" element={<Speaker />} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App
