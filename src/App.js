import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from "./pages/auth/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import "./App.css"
import Register from "./pages/auth/Register";
import Main from "./pages/Main";
import Create from "./pages/create";
function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="" element={<Main/>}>
          </Route>
          <Route path="/register" element={<Register/>}>
          </Route>
          <Route path="/create" element={<Create/>}>
          </Route>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
