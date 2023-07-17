import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function SearchForm() {

  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const top100Films = [
    { label: 'funny', id: 1 },
    { label: 'cohort', id: 2 },
    { label: 'cartoon', id: 3 },
    { label: 'nsfw', id: 4 },
    { label: 'meme', id: 5 },

  ];
      return (
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      );
    }
    

export default SearchForm;