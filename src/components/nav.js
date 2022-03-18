import React, {useEffect}from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import "../styles/styles.css"
import {Link as LinkRouter} from "react-router-dom"

import {connect} from 'react-redux';
import userAction from '../redux/actions/userAction';

const NavBar = (props) => {

  function SignOut() {
		props.signOutUser(props.user.email)
	}

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="boxNavBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="nombreLogo"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <h2>My Tinerary</h2>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem>
              <LinkRouter to="home" className="linkResponsive">HOME</LinkRouter>
              </MenuItem>
              <MenuItem>
              <LinkRouter to="cities" className="linkResponsive">CITIES</LinkRouter>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="nombreLogo"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <h2>My Tinerary</h2>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

              <MenuItem>
              <LinkRouter to="home" className="normalLink">HOME</LinkRouter>
              </MenuItem>
              <MenuItem>
              <LinkRouter to="cities" className="normalLink">CITIES</LinkRouter>
              </MenuItem>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {!props.user ?<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> : 
                <img src={props.user.urlImage} alt="User Image" className='userImage'/>}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
              {!props.user ?
              <>
              <MenuItem>
              <LinkRouter to="signUp" className="linkResponsive">Sign Up</LinkRouter>
              </MenuItem>
              <MenuItem>
              <LinkRouter to="signIn" className="linkResponsive">Sign In</LinkRouter>
              </MenuItem>
              </>
              :
              <>
              <MenuItem>
              <LinkRouter to="signOut" className="linkResponsive" onClick={SignOut}>Sign Out</LinkRouter>
              </MenuItem>
              </>
              }
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapStateToProps = (state) =>{
  
  return{
    user: state.userReducer.user 
  }
}

const mapDispatchToProps = {
  signOutUser: userAction.signOutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
