import "./App.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { Home } from "./Pages/Home";
import About from "./Pages/About";
// import Loginregister from "./Pages/Loginregister";
import { Contact } from "./Pages/Contact";
import Ourmission from "./Pages/Ourmission";
import Registernew from "./Pages/Registernew";
import Login from "./Pages/Login";
import "./Pages/Register.css";
import Menu from "./Pages/Menu";
import { Adminpage } from "./Pages/Adminpage";
import { Userpage } from "./Pages/User/Userpage";
import { Donarpage } from "./Pages/Donarpage";
import { AdminDashboard } from "./Pages/Admin/AdminDashboard";
import { UserDashboard } from "./Pages/User/UserDashboard";
import Adminsidebar from "./components/Admin/Adminsidebar";
import Donarsidebar from "./components/DonarSidebar";
import Usersidebar from "./components/User/Usersidebar";
import { Regdonors } from "./Pages/Admin/Regdonors";
import { Addstate, Managestate } from "./Pages/Admin/State";
import { Addcity, Managecity } from "./Pages/Admin/City";
import { Listedfoods } from "./Pages/Admin/Listedfoods";
import { Requests, New, Pickcom, Rejected, All } from "./Pages/Admin/Requests";
import { UserListedfoods } from "./Pages/User/UserListedfoods";
import { Useradd } from "./Pages/User/Useradd";
import {
  UserRequests,
  UserNew,
  UserPickcom,
  UserAll,
} from "./Pages/User/UserRequests";
import { DonarDashboard } from "./Pages/DonarDashboard";
import { Addfood, Manage } from "./Pages/Listfooddetails";
import { useEffect } from "react";
// import "./components/profile/profile.css"
// import Addfood from './Listfooddetails';
// import Manage from './Listfooddetails';

function App() {
  const [login, setLogin] = useState(document.cookie.indexOf("jwt") !== -1);
  const setLoginFalse = () => {
    setLogin(false);
  };
  useEffect(() => {
    Loginnot();
  });
  const Loginnot = async () => {
    const currentuser = await fetch("/api/v1/users/me/");
    const current = await currentuser.json();

    if (current.status === "sucess") {
      // console.log(login);
      updateUI(true);
    }
  };
  const updateUI = (valid) => {
    setLogin(valid);
  };
  return (
    <>
      <NavBar isLogin={login} setLoginFalse={setLoginFalse} />

      <div className="pages">
        <Routes>
          <Route exact="true" path="/" element={<Menu></Menu>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/mission" element={<Ourmission></Ourmission>} />
          <Route
            path="/loginregister"
            element={<Login toggleLogin={updateUI}></Login>}
          />
          <Route path="/Registernew" element={<Registernew></Registernew>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/Adminpage" element={<Adminpage></Adminpage>} />
          <Route path="/Donarpage" element={<Donarpage></Donarpage>} />
          <Route path="/Userpage" element={<Userpage></Userpage>} />

          <Route
            path="/Donarpage/dashboard"
            exact="true"
            element={
              <div>
                <Donarsidebar></Donarsidebar>
                <DonarDashboard></DonarDashboard>
              </div>
            }
          />
          <Route
            path="/Donarpage/listfooddetails/add"
            exact="true"
            element={
              <div>
                <Donarsidebar></Donarsidebar>
                <Addfood></Addfood>
              </div>
            }
          />
          <Route
            path="/Donarpage/listfooddetails/manage"
            exact="true"
            element={
              <div>
                <Donarsidebar></Donarsidebar>
                <Manage></Manage>
              </div>
            }
          />
          <Route
            path="/Donarpage/request"
            exact="true"
            element={
              <div>
                <Donarsidebar></Donarsidebar>
                <Requests></Requests>
              </div>
            }
          />
          <Route
            path="/Donarpage/request/new"
            exact="true"
            element={
              <div>
                <Donarsidebar></Donarsidebar>
                <New></New>
              </div>
            }
          />
          <Route
            path="/Donarpage/request/pickcom"
            exact="true"
            element={
              <div>
                <Donarsidebar></Donarsidebar>
                <Pickcom></Pickcom>
              </div>
            }
          />
          <Route
            path="/Donarpage/request/reject"
            exact="true"
            element={
              <div>
                <Donarsidebar></Donarsidebar>
                <Rejected></Rejected>
              </div>
            }
          />
          <Route
            path="/Donarpage/request/all"
            exact="true"
            element={<All></All>}
          />
          <Route
            exact="true"
            path="/Adminpage/dashboard"
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <AdminDashboard></AdminDashboard>
              </div>
            }
          />
          <Route
            path="/Adminpage/state/add"
            exact="true"
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <Addstate></Addstate>
              </div>
            }
          />
          <Route
            path="/Adminpage/state/manage"
            exact="true"
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <Managestate></Managestate>
              </div>
            }
          />
          <Route
            path="/Adminpage/city/add"
            exact="true"
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <Addcity></Addcity>
              </div>
            }
          />
          <Route
            path="/Adminpage/city/manage"
            exact="true"
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <Managecity></Managecity>
              </div>
            }
          />
          <Route
            path="/Adminpage/regfooddonors"
            exact="true"
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <Regdonors></Regdonors>
              </div>
            }
          />
          <Route
            path="/Adminpage/listed/food"
            exact="true"
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <Listedfoods></Listedfoods>
              </div>
            }
          />
          <Route
            path="/Adminpage/request"
            exact="true"
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <Requests></Requests>
              </div>
            }
          />
          <Route
            path="/Adminpage/request/new"
            exact="true"
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <New></New>
              </div>
            }
          />
          <Route
            path="/Adminpage/request/pickcom"
            exact="true"
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <Pickcom></Pickcom>
              </div>
            }
          />
          <Route
            path="/Adminpage/request/reject"
            exact="true"
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <Rejected></Rejected>
              </div>
            }
          />
          <Route
            path="/Adminpage/request/all"
            exact="true"
            element={
              <div>
                <Adminsidebar></Adminsidebar>
                <All></All>
              </div>
            }
          />
          <Route
            exact="true"
            path="/Userpage/Userdashboard"
            element={
              <div>
                <Usersidebar></Usersidebar>
                <UserDashboard></UserDashboard>
              </div>
            }
          />
          <Route
            path="/Userpage/add/food"
            exact="true"
            element={
              <div>
                <Usersidebar></Usersidebar>
                <Useradd></Useradd>
              </div>
            }
          />
          <Route
            path="/Userpage/listed/food"
            exact="true"
            element={
              <div>
                <Usersidebar></Usersidebar>
                <UserListedfoods></UserListedfoods>
              </div>
            }
          />
          <Route
            path="/Userpage/request"
            exact="true"
            element={
              <div>
                <Usersidebar></Usersidebar>
                <UserRequests></UserRequests>
              </div>
            }
          />
          <Route
            path="/Userpage/request/new"
            exact="true"
            element={
              <div>
                <Usersidebar></Usersidebar>
                <UserNew></UserNew>
              </div>
            }
          />
          <Route
            path="/Userpage/request/pickcom"
            exact="true"
            element={
              <div>
                <Usersidebar></Usersidebar>
                <UserPickcom></UserPickcom>
              </div>
            }
          />
          <Route
            path="/Userpage/request/all"
            exact="true"
            element={
              <div>
                <Usersidebar></Usersidebar>
                <UserAll></UserAll>
              </div>
            }
          />
        </Routes>
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
