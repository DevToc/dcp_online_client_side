import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from "./pages/auth/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import "./App.css"
function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="" element={<Login/>}>
          </Route>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
