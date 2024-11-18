import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return <Home skills={skills} />;
}

export default App;
