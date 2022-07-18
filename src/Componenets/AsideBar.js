import React from 'react'
import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { List,Stack, ListItem, Box,Button,Container, ListItemButton, ListItemText ,Divider } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import SearchAppBar from './Search';
import ModelNote from '.././Componenets/ModelNote'
import { useNoteContext } from '../Context/NoteContext';
const AsideBar = () => {
   const { noteDispatch, labelArray } = useNoteContext();
    return ( <Container  >
          <Stack display='block' spacing={4}>
       
            
    <Box sx={{ width: '100%', maxWidth: 180, bgcolor: 'background.paper'  }}>
          <nav aria-label="main mailbox folders">
            
              <List >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LabelOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Lables" />
            </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inventory2OutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Archive" />
            </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DeleteOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
          {/* <Divider /> */}
        <Button  onClick={() => noteDispatch({ type: "NOTE_MODAL", payload: true })} variant="contained" >Create New Note</Button>
                
        </Box>
            
      </Stack>
      <ModelNote/>
      <SearchAppBar/>
    </Container>
  )
}
export default AsideBar
