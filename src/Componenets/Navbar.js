import React from 'react'
import { NavLink } from 'react-router-dom';
import {AppBar,Stack, Toolbar,Typography,Button,Box,IconButton,Container} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const NavBar = () => {
    return (
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                  <Container>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Note App
                        </Typography>
                        <Stack direction='row' spacing={2}>
                        <IconButton><AccountCircleIcon color='inherit' /></IconButton>
                            <NavLink to ='/LogIn'>
                              <Button variant='contained' color="primary">Login</Button>
                            </NavLink>
                            </Stack>
                          </Toolbar>
                      </Container>
                </AppBar>
            </Box>
      
  )
}
export default NavBar