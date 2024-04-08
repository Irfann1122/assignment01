import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
            <Typography variant='h4'>    HOME  </Typography>&nbsp;&nbsp;
            <Button variant='contained'color='error'>
                <Link to={'/b'} style={{textDecoration:'none', color:'white'}}> 
                 Dashboard
                </Link>
               </Button>  &nbsp;&nbsp;
            <Button variant='contained'color='success'>
            <Link to={'/add'} style={{textDecoration:'none', color:'white'}}>
            Blog Form
            </Link>
           </Button>
            </Toolbar>
        </AppBar>
   
    </div>
  )
}

export default Navbar
