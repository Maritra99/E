import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div className="text-center dashboard-menu ">
        <div className="card" >
          <div className="list-group">
            <h4>Dashboard</h4>
            <NavLink
              to="/dashboard/user/profile"
              className="list-group-item list-group-item-action"
            >
              Update Profile
            </NavLink>
            <NavLink
              to="/dashboard/user/orders"
              className="list-group-item list-group-item-action"
            >
              Visit Orders
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
