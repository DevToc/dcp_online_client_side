import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Register from "./pages/auth/Register";
import Main from "./pages/Main";
import Create from "./pages/create";
import Home from "./pages/Home/Index";
import Header from "./components/Header/Header";
import Movements from "./pages/Movements/Index";
import Withdraw from "./pages/Withdraw/Index";
import Transfer from "./pages/Transfer/Index";
import Messages from "./pages/Messages/Index";

const routes = [
  {
    url: "home",
    component: Home,
  },
  {
    url: "movements",
    component: Movements,
  },
  {
    url: "withdraw",
    component: Withdraw,
  },
  {
    url: "transfer",
    component: Transfer,
  },
  ,
  {
    url: "messages",
    component: Messages,
  },
];
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" exact element={<Login></Login>}></Route>
          <Route path="/register" exact element={<Register></Register>}></Route>
          <Route path="/main" exact element={<Main></Main>}></Route>
          <Route path="/create" exact element={<Create></Create>}></Route>

          <Route path="/">
            {routes.map((route, index) => {
              return (
                <Route
                key={index}
                  path={route.url}
                  element={
                    <Header>
                      <route.component />
                    </Header>
                  }
                />
              );
            })}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
