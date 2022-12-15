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

const urls = [{
  url:'home',
  component:Home
},{
  url:'movements',
  component:Movements
},
{
  url:'withdraw',
  component:Withdraw
}]
function App() {
  return (
    <div className="App">
      <Router>
        <Header>
        <Routes>
          {/* <Route path="" element={<Header />}></Route> */}
          {/* <Route path="/register" element={<Register/>}>
          </Route> */}
          {
            urls.map((url,index)=>{
              return (
                <Route path={url.url} element={<url.component></url.component>}> </Route>
              )
            })
          }
          {/* <Route path="home" element={<Home></Home>}> </Route>
          <Route path="movements" element={<Movements></Movements>}> </Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/register" element={<Register />}></Route> */}
        </Routes>
        </Header>
          {/* <Routes>
          
            <Route path="/register" element={<Register />}></Route>
          </Routes>
     */}
      </Router>
    </div>
  );
}

export default App;
