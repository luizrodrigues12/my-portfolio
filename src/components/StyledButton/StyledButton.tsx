import { styled } from "@mui/material";
import { ReactNode } from "react";

interface TypeButton {
  children: ReactNode;
  onClick: () => void;
  href: string;
  width: string;
}

const StyledButton = ({ children, onClick, href, width }: TypeButton) => {
  const StyledButton = styled("a")(({ theme }) => ({
    backgroundColor: "transparent",
    borderRadius: "3px",
    padding: "5px 15px",
    width: width,
    border: `1px solid ${theme.palette.primary.contrastText}`,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    textDecoration: "none",
  }));

  return (
    <StyledButton onClick={onClick} href={href} target="_blank">
      {children}
    </StyledButton>
  );
};

export default StyledButton;
