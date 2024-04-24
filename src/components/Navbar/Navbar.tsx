import { AppBar, Toolbar, styled } from "@mui/material";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  return (
    <div>
      <AppBar position="absolute">
        <StyledToolbar>
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#skills">
            Skills
          </a>
          <a className="nav-link" href="#projects">
            Projects
          </a>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
