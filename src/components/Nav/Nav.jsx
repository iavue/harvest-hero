import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">HarvestHero</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login
          </Link>
        )}

        {/* If a user is logged in and their access level is vendor, show these links */}
        {user.access_level === "vendor" && user.id && (
          <>
            <Link className="navLink" to="/addNewItem">
              Add New Item
            </Link>

            <Link className="navLink" to="/profile">
              Profile
            </Link>

            <Link className="navLink" to="/user">
              Account
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        {/* If a user is logged in and their access level is customer, show these links */}
        {user.access_level === "customer" && user.id && (
          <>
            <Link className="navLink" to="/main">
              Main
            </Link>

            <Link className="navLink" to="/favorites">
              Favorites
            </Link>

            <Link className="navLink" to="/user">
              Account
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        {/* Gonna go ahead and get rid of /about for now */}
        {/* <Link className="navLink" to="/about">
          About
        </Link> */}
      </div>
    </div>
  );
}

export default Nav;
