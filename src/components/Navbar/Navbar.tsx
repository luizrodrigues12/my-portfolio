import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  return (
    <div>
      <AppBar position="absolute">
        <StyledToolbar>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
