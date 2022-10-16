import { Link, Outlet } from "react-router-dom";

import "./App.css";
import Header from "./components/common/Header";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
