import { AppBar, IconButton, TextField, Typography } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const submitSearch = () => {
    dispatch({ type: "FETCH_SEARCH", payload: searchText });
    history.push("/");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={() => history.push("/favorites")}>
              <FavoriteRoundedIcon />
            </IconButton>
            <IconButton onClick={() => history.push("/")}>
              <CottageRoundedIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              align="center"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              GIPHY Search!
            </Typography>
              <TextField
                placeholder="Search…"
                value={searchText}
                onChange={(event)=>setSearchText(event.target.value)}
                inputRef={inputRef}
              />
            <IconButton onClick={() => submitSearch()}>
              <SendRoundedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;