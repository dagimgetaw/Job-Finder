import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Layout from "./Layout";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import JobDesc from "./Pages/JobDesc";
import CreateJob from "./Pages/CreateJob";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/job/:id" element={<JobDesc />} />>
          <Route path="/create-job" element={<CreateJob />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
