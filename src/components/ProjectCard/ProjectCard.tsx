import { Box, Card, Typography, styled } from "@mui/material";
import { ReactNode } from "react";
import StyledButton from "../StyledButton/StyledButton";

interface TypeProjectCard {
  children: ReactNode;
  src: string;
  technologies: string;
  projectLink: string;
  codeLink: string;
  projectName: string;
}

const ProjectCard = ({
  children,
  src,
  technologies,
  projectLink,
  codeLink,
  projectName,
}: TypeProjectCard) => {
  const ProjectCard = styled(Card)(({ theme }) => ({
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    border: `1px solid ${theme.palette.primary.contrastText}4`,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  }));

  return (
    <ProjectCard>
      <Typography
        variant="h3"
        p={"15px 15px 0px 15px"}
        alignSelf={"self-start"}
      >
        {projectName}
      </Typography>
      <img
        src={src}
        width={"90%"}
        height={"100%"}
        style={{
          margin: "0px 10px",
          padding: "30px 15px",
        }}
      />
      <Typography padding={"15px"} variant="subtitle1">
        {children}
      </Typography>
      <Typography padding={"15px"} variant="subtitle1">
        <b>Technologies:</b> {technologies}.
      </Typography>
      <Box
        width={"100%"}
        display={"flex"}
        gap={"10px"}
        justifyContent={"center"}
        margin={"5px 0px 30px 0px"}
      >
        <StyledButton onClick={() => {}} href={projectLink} width="40%">
          View Project
        </StyledButton>
        <StyledButton onClick={() => {}} href={codeLink} width="40%">
          View Code
        </StyledButton>
      </Box>
    </ProjectCard>
  );
};

export default ProjectCard;
