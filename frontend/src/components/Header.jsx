import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import { Box, color } from '@mui/system'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { getAllMovies } from '../api/apiHelpers.js';

const Header = () => {

  const [value,setValue] = useState(0);

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
  ]

  useEffect(() => {
    getAllMovies().then((data) => console.log(data)).catch((err) => console.log(err));
  },[])

  return (
    <AppBar sx={{bgcolor:"#2b2d42"}}>
      <Toolbar>

        <Box width={'20%'}>
          <MovieFilterIcon />
        </Box>

        <Box width={'30%'} margin={'auto'}>
          <Autocomplete
            freeSolo
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => <TextField sx={{input:{color:"white"}}} {...params} placeholder="Search Movies" />}
          />
        </Box>

        <Box display={'flex'} >
          <Tabs  textColor='white' indicatorColor='secondary' value={value} onChange={(e,val) => setValue(val)}>
            <Tab label="Admin"/>
            <Tab label="Auth"/>
            <Tab label="All Movies"/>
          </Tabs>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default Header