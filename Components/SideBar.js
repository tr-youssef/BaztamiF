import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SideBar() {
  const [Active, setActive] = useState(location.pathname);
  return (
    <div className="SideBar">
      <div className="ButtonMenuSideBar">
        <img src="Img//MenuIcon.png" alt="" />
      </div>
      <hr className="HrSidebar" />
      <div className="ProfilSideBar">
        <img src="Img/Profil.png" />
      </div>
      <ul className="UlSideBar">
        <li
          className={`LiSideBar ${Active === "/Dashboard" ? "MenuActive" : ""}`}
        >
          <Link to="/" onClick={() => setActive("/Dashboard")}>
            <img src="Img/IconDashboard.png" />
          </Link>
        </li>
        <li
          className={`LiSideBar ${
            Active === "/Transactions" ? "MenuActive" : ""
          }`}
        >
          <Link to="/Transactions" onClick={() => setActive("/Transactions")}>
            <img src="Img/IconTransactions.png" />
          </Link>
        </li>
        <li
          className={`LiSideBar ${
            Active === "/Categories" ? "MenuActive" : ""
          }`}
        >
          <Link to="/Categories" onClick={() => setActive("/Categories")}>
            <img src="Img/IconCategories.png" />
          </Link>
        </li>
        <li
          className={`LiSideBar ${Active === "/Accounts" ? "MenuActive" : ""}`}
        >
          <Link to="/Accounts" onClick={() => setActive("/Accounts")}>
            <img src="Img/IconAccounts.png" />
          </Link>
        </li>

        <li
          className={`LiSideBar ${Active === "/Rapports" ? "MenuActive" : ""}`}
        >
          <Link to="/Rapports" onClick={() => setActive("/Rapports")}>
            <img src="Img/IconRapports.png" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
