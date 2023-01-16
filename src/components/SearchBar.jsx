import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      navigate(`/search/${searchTerm}`)

      setSearchTerm('')
    }
  }
  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        
        
      }}
    >
      <TextField
      id="outlined-error" label="Search" variant="standard"
        className="search-bar"
        
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
       style={{backgroundColor: 'palette.background.paper', border: 'none', boxShadow: "none", color: 'red'}}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }} aria-label='search'>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
