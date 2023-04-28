import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import {
  AddCircleOutline,
  AccountCircle,
  FavoriteBorder,
  Home,
  Menu,
} from '@mui/icons-material';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Nav() {
  const user = useSelector((store) => store.user);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  // ORIGINAL
  // return (
  //   <div className="nav">
  //     <Link to="/home">
  //       <h2 className="nav-title">HarvestHero</h2>
  //     </Link>
  //     <div>
  //       {/* If no user is logged in, show these links */}
  //       {!user.id && (
  //         // If there's no user, show login/registration links
  //         <Link className="navLink" to="/login">
  //           Login
  //         </Link>
  //       )}

  //       {/* If a user is logged in and their access level is vendor, show these links */}
  //       {user.access_level === "vendor" && user.id && (
  //         <>
  //           <Link className="navLink" to="/addNewItem">
  //             Add New Item
  //           </Link>

  //           <Link className="navLink" to="/profile">
  //             Profile
  //           </Link>

  //           <Link className="navLink" to="/user">
  //             Account
  //           </Link>

  //           <LogOutButton className="navLink" />
  //         </>
  //       )}

  //       {/* If a user is logged in and their access level is customer, show these links */}
  //       {user.access_level === "customer" && user.id && (
  //         <>
  //           <Link className="navLink" to="/main">
  //             Main
  //           </Link>

  //           <Link className="navLink" to="/favorites">
  //             Favorites
  //           </Link>

  //           <Link className="navLink" to="/user">
  //             Account
  //           </Link>

  //           <LogOutButton className="navLink" />
  //         </>
  //       )}

  //       {/* Gonna go ahead and get rid of /about for now */}
  //       {/* <Link className="navLink" to="/about">
  //         About
  //       </Link> */}
  //     </div>
  //   </div>
  // );

  // 1st test run of styling
  return (
    <div className="nav">
      <Link to="/home">
        <h1 className="nav-title">HarvestHero</h1>
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
            <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, borderTop: '1px solid black' }} >
              <BottomNavigation showLabels>
                <BottomNavigationAction
                  component={Link}
                  to="/profile"
                  label="Profile"
                  icon={<AccountCircle />}
                />
                <BottomNavigationAction
                  component={Link}
                  to="/addNewItem"
                  label="Add Item"
                  icon={<AddCircleOutline />}
                />
              </BottomNavigation>
            </Box>

            {/* <Link className="navLink" to="/user">
              Account
            </Link>

            <LogOutButton className="navLink" /> */}

            <Stack direction="row" spacing={2}>
              <div>
                <Button
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={open ? 'composition-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                  color="secondary"
                >
                  Menu
                </Button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom-start' ? 'left top' : 'left bottom',
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem component={Link} to="/user" onClick={handleClose}>Account</MenuItem>
                            <MenuItem component={Link} to="/about" onClick={handleClose}>About</MenuItem>
                            <MenuItem onClick={handleClose}><LogOutButton /></MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </Stack>


          </>
        )}

        {/* If a user is logged in and their access level is customer, show these links */}
        {user.access_level === "customer" && user.id && (
          <>

            <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, borderTop: '1px solid black' }} >
              <BottomNavigation showLabels>
                <BottomNavigationAction
                  component={Link}
                  to="/main"
                  label="Search"
                  icon={<SearchIcon />}
                />
                <BottomNavigationAction
                  component={Link}
                  to="/favorites"
                  label="Cart"
                  icon={<ShoppingCartOutlinedIcon />}
                />
              </BottomNavigation>
            </Box>

            {/* <Link className="navLink" to="/main">
              <Home fontSize="small" /> Search
            </Link>

            <Link className="navLink" to="/favorites">
              <FavoriteBorder fontSize="small" /> Favorites
            </Link> */}

            {/* <Link className="navLink" to="/user">
              <AccountCircle fontSize="small" /> Account
            </Link>

            <LogOutButton className="navLink" /> */}

<Stack direction="row" spacing={2}>
              <div>
                <Button
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={open ? 'composition-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                  color="secondary"
                >
                  Menu
                </Button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom-start' ? 'left top' : 'left bottom',
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem component={Link} to="/user" onClick={handleClose}>Account</MenuItem>
                            <MenuItem component={Link} to="/about" onClick={handleClose}>About</MenuItem>
                            <MenuItem onClick={handleClose}><LogOutButton /></MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </Stack>

          </>
        )}

        {/* <Link className="navLink" to="/about">
          About
        </Link> */}
      </div>
    </div>
  )
}

export default Nav;
