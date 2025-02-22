import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Layout";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
