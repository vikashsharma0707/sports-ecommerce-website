


import { Link, Outlet } from "react-router-dom";
import { FaHome, FaEye, FaPlus, FaSearch, FaEdit, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";
import "../css/adminSidenav.css";

const Admindashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Side Navigation */}
      <nav className="sidenav">
        <div className="sidenav1">
          <h1 className="dashboard-title">
            <FaTachometerAlt /> Dashboard
          </h1>
        </div>

        <div className="sidenav2">
          <Link to="Dashboard" aria-label="Dashboard"><FaHome className="icon" /> Dashboard</Link>
          <Link to="display" aria-label="Display"><FaEye className="icon" /> Display</Link>
          <Link to="insert" aria-label="Insert"><FaPlus className="icon" /> Insert</Link>
          <Link to="search" aria-label="Search"><FaSearch className="icon" /> Search</Link>
          <Link to="update" aria-label="Update"><FaEdit className="icon" /> Update</Link>
          <Link to="dashboard" aria-label="Dashbaord"><FaEdit className="icon" /> Dashboard</Link>
          <Link to="orderdisplay" aria-label="OrderDisplay">Order Display</Link>
          
        </div>

        <div className="sidenav3">
          <Link to="logout" aria-label="Logout"><FaSignOutAlt className="icon" /> Logout</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Admindashboard;
