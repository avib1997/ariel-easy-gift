import React, {useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import GoldGift from '../images/gold gift.png';
import './Navbar.css';

function Navbar() {

  const pages = [
    'newEvent',
    'aboutUs',
    'history',
    'q&a',
    'blessingsSite',
    'registration',
    'profile',
    'settings',
    'exitLogout'
  ];

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleCloseNavMenu = () => {
    setAnchorEl(null)
  }

  return (
      <div>
        {/* Navbar */}
        <AppBar
          position="absolute"
          className="App-navbar"
          style={{ background: 'transparent', boxShadow: 'none' }}
        >
          <Toolbar style={{ justifyContent: 'space-between' }}>
            {/* Dropdown Menu */}
            <IconButton
              className="transparent-icon-button"
              color="inherit"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faBars} size="1.5x" />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              className="transparent-menu"
            >
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <RouterLink
                      style={{ textDecoration: 'none', color: 'inherit' }}
                      to={`/${page}`}
                    >
                      {page}
                    </RouterLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            {/* Logo */}
            <RouterLink to="/" className="navbar-logo">
              <div className="logo-container">
                <div className="custom-logo">Easy Gift</div>
                <img
                  src={GoldGift}
                  alt="Gold Gift"
                  className="gold-gift-image"
                />
              </div>
            </RouterLink>
          </Toolbar>
        </AppBar>
      </div>
  )
}

export default Navbar
