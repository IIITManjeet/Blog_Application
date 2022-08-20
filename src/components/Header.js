import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
const Header = () => {
 return <AppBar sx={{ background: "linear-gradient(90deg, rgba(1,0,36,0.9107021470697654) 0%, rgba(9,62,121,1) 27%, rgba(0,249,255,1) 95%, rgba(0,236,255,0.7118225952490371) 133%);" }}>
  <Toolbar>
   <Typography variant='h4'>BlogsApp</Typography>
   <Box display="flex" marginLeft="auto">
    <Button variant='contained'
    sx={{ margin: 1, borderRadius: 10 }} color='warning'>Login</Button>
    <Button variant='contained' sx={{ margin: 1,borderRadius:10}} color='warning'>Signup</Button>
   </Box>
  </Toolbar>
 </AppBar>;
}

export default Header