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
import { Link } from 'react-router-dom';

const Header = () => {

  const [value, setValue] = useState(0);
  const [movies, setmovies] = useState([])

  useEffect(() => {
    getAllMovies().then((data) => setmovies(data.movies)).catch((err) => console.log(err));
  }, [])

  return (
    <AppBar position='stickey' sx={{ bgcolor: "#2b2d42" }}>
      <Toolbar>

        <Box width={'20%'}>
          <MovieFilterIcon />
        </Box>

        <Box width={'30%'} margin={'auto'}>
          <Autocomplete
            freeSolo
            options={movies && movies.map((option) => option.title)}
            renderInput={(params) => <TextField sx={{ input: { color: "white" } }} {...params} placeholder="Search Movies" />}
          />
        </Box>

        <Box display={'flex'} >
          <Tabs textColor='white' indicatorColor='secondary' value={value} onChange={(e, val) => setValue(val)}>
            <Tab LinkComponent={Link} to="/" label="Home" />
            <Tab LinkComponent={Link} to="/movies" label="Movie" />
            <Tab LinkComponent={Link} to="/admin" label="Admin" />
            <Tab LinkComponent={Link} to="/auth" label="Auth" />
          </Tabs>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default Header