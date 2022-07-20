import React from 'react'
import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { List,Stack, ListItem, Box,Button,Container, ListItemButton, ListItemText ,Divider } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import SearchAppBar from './Search';
import ModelNote from '.././Componenets/ModelNote'
import { useNoteContext } from '../Context/NoteContext';
import NavBar from './Navbar';
const AsideBar = () => {
   const { noteDispatch, labelArray } = useNoteContext();
    return ( <Container  >
          <Stack display='block' spacing={4}>
       
            
    <Box sx={{ width: '20%', maxWidth: 180, bgcolor: 'background.paper'  }}>
          <nav aria-label="main mailbox folders">
            
              <List >
          <NavLink to="/HomePage" className={({ isActive }) => !isActive ? "not-active" : "is-active"}><ListItem disablePadding>
          <ListItemButton>
              <ListItemIcon>
                    <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
                </ListItemButton>
                
          </ListItem></NavLink>
              <NavLink to='/ArchivePage' className={({ isActive }) => !isActive ? "not-active" : "is-active"}> <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inventory2OutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Archive" />
            </ListItemButton>
              </ListItem>
              </NavLink>
              <NavLink to='/TrashPage' className={({ isActive }) => !isActive ? "not-active" : "is-active"}><ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DeleteOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItemButton>
              </ListItem>
              </NavLink>
                  
        </List>
      </nav>
          {/* <Divider /> */}
        <Button  onClick={() => noteDispatch({ type: "NOTE_MODAL", payload: true })} variant="contained" >Create New Note</Button>
                
        </Box>
            
      </Stack>
      <ModelNote/>
      {/* <SearchAppBar/> */}
    </Container>
  )
}
export default AsideBar
