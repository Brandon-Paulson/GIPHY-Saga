import React from 'react';
import {FormControl, Select, InputLabel, MenuItem} from '@mui/material';
import { useState } from 'react';

function SearchForm() {

  const [categoryValue, setCategoryValue] = useState('')
  const handleChange = () => {
      setCategoryValue();
  };

      return (
        <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          id="demo-simple-select"
          value={categoryValue}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1}>funny</MenuItem>
          <MenuItem value={2}>cohort</MenuItem>
          <MenuItem value={3}>cartoon</MenuItem>
          <MenuItem value={4}>nsfw</MenuItem>
          <MenuItem value={5}>meme</MenuItem>
        </Select>
      </FormControl>
    
    );
  }
export default SearchForm;