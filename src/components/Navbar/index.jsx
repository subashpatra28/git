import React from "react";

const Navbar = ({ user }) => (
  <nav className="navbar  navbar-dark bg-dark p-2">
    <img
      src={user.avatar_url}
      width="50"
      height="50"
      className="avatar "
      alt="user"
    />
    <h3 style={{ color: "white" }}>{user.name}</h3>
    <a  href="/">
      Search Other User
    </a>
  </nav>
);

export default Navbar;
