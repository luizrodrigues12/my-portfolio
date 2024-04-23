import { styled } from "@mui/material";
import { ReactNode } from "react";

interface TypeButton {
  children: ReactNode;
}

const StyledButton = ({ children }: TypeButton) => {
  const StyledButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  }));

  return <StyledButton>{children}</StyledButton>;
};

export default StyledButton;
