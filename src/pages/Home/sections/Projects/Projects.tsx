import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import githubFinder from "../../../../assets/images/githubFinder.jpg";
import todoList from "../../../../assets/images/todoList.jpg";
import { Container, Grid, Typography, styled } from "@mui/material";

const Projects = () => {
  // Styled Projects Container
  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: "30px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    justifyContent: "center",
    [theme.breakpoints.up("xs")]: {},
    [theme.breakpoints.up("md")]: {
      paddding: "0",
      height: "100vh",
    },
  }));

  return (
    <StyledProjects id="projects">
      <Typography variant="h2" marginBottom={4} textAlign={"center"}>
        Projects
      </Typography>
      <Container maxWidth="lg">
        <Grid
          container
          display={"flex"}
          gap={"40px"}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          <Grid item xs={12} md={5} display={"flex"}>
            <ProjectCard
              src={todoList}
              technologies="Javascript, Typescript, Node, Express and React"
              projectLink="https://todo-luiz.netlify.app/"
              codeLink="https://github.com/luizrodrigues12/todo-luiz-front"
              projectName="To-do List"
            >
              Simple fullstack application that can list and display to-dos,
              using CRUD.
            </ProjectCard>
          </Grid>
          <Grid item xs={12} md={5}>
            <ProjectCard
              src={githubFinder}
              technologies="Javascript, Typescript, React, CSS and HTML"
              projectLink="https://luizrodrigues12.github.io/github-finder/"
              codeLink="https://github.com/luizrodrigues12/github-finder"
              projectName="GitHub Finder"
            >
              Application that exposes public data from GitHub users, through
              its API.
            </ProjectCard>
          </Grid>
        </Grid>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
